'use babel';

export default {
  // Activate linter
  activate() {
    const helpers = require('atom-linter');

    // Check if puppet-lint has support for the %{column} placeholder
    helpers.exec(atom.config.get('linter-puppet-linting.executablePath'), ['--help']).then((output) => {
      if (/JSON/.exec(output) === null) {
        atom.notifications.addError(
          'You are using an unsupported version of puppet-lint!',
          {
          detail: 'Please upgrade your version of puppet-lint to >= 2.1.0.\n'
              + 'Check the README for further information.',
          },
        );
      }
    });
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  provideLinter() {
    const helpers = require('atom-linter');

    return {
      name: 'Puppet-Lint',
      grammarScopes: ['source.puppet'],
      scope: 'file',
      lintsOnChange: false,
      lint: async (textEditor) => {
        // To respect this project's .puppet-lint.rc execute puppet-lint from the root directory of this file's project
        const filePath = textEditor.getPath();
        const [projectPath, projectRelativeFilePath] = atom.project.relativizePath(filePath);

        // initialize args
        const args = ['--relative', '--json', '--error-level', atom.config.get('linter-puppet-linting.errorLevel')];

        // add check flags
        if (atom.config.get('linter-puppet-linting.checkFlags') !== '')
          args.push(...atom.config.get('linter-puppet-linting.checkFlags').split(','));

        // add automatic fix flag
        if (atom.config.get('linter-puppet-linting.automaticFix'))
          args.push('-f');

        // add custom checks file argument
        if (atom.config.get('linter-puppet-linting.customChecks') !== '')
          args.push(...['-l', atom.config.get('linter-puppet-linting.customChecks')]);

        // Add the file to be checked to the arguments
        args.push(projectRelativeFilePath);

        return helpers.exec(atom.config.get('linter-puppet-linting.executablePath'), args, { cwd: projectPath, ignoreExitCode: true }).then((output) => {
          const toReturn = [];

          // If puppet-lint errors to stdout, then redirect the message to atom error notifications
          if (/puppet-lint:/.exec(output)) {
            atom.notifications.addError(
              'Puppet-Lint errored due to the following reason(s):',
              { detail: output }
            );

            // return early
            return toReturn;
          }

          // parse JSON output, and immediately access zeroth element of redundant outer array
          const info = JSON.parse(output)[0];

          // Check for proper warnings and errors from stdout
          if (info.length > 0) {
            info.forEach((issue) => {
              const line = Number.parseInt(issue.line) - 1;
              const col = Number.parseInt(issue.column) - 1;

              toReturn.push({
                severity: issue.kind,
                excerpt: issue.message,
                location: {
                  file: issue.path,
                  position: helpers.generateRange(textEditor, line, col),
                },
              });
            });
          }
          return toReturn;
        });
      },
    };
  },
};
