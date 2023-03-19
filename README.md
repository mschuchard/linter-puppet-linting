# linter-puppet-linting

This Atom/Pulsar package is the new home of AtomLinter/linter-puppet-lint. That package was no longer able to be maintained due to lack of administrator permissions to fix the continuous integration tests and/or bypass the protected branch status. Therefore I have migrated the package I formerly maintained there to its new home here.

This package provides linter support for your Puppet manifests through Atom-Linter using Puppet-Lint.

![Preview](https://raw.githubusercontent.com/AtomLinter/linter-puppet-lint/master/linter_puppet_lint.png)

### APM (Atom) and PPM (Pulsar) Support

`apm` was discontinued prior to the sunset by the Atom Editor team. `ppm` for Pulsar does not yet support package publishing. Therefore, the installation instructions are now as follows if you want the latest version in Atom, Atom Beta, or Atom Dev:

- Locate the Atom or Pulsar packages directory on your filesystem (normally at `<home>/.{atom,pulsar}/packages`)
- Retrieve the code from this repository either via `git` or the Code-->Download ZIP option in Github.
- Place the directory containing the repository's code in the Atom or Pulsar packages directory.
- Execute `npm install` in the package directory (requires NPM).
- Repeat for any missing or outdated dependencies.

and Pulsar:

- Install the old version of the package as usual with either PPM or the GUI installer in the editor.
- Locate the Atom or Pulsar packages directory on your filesystem (normally at `<home>/.{atom,pulsar}/packages`)
- Replace the `lib/main.js` file in the package directory with the file located in this remote Github repository.

Additionally: this package is now in maintenance mode. All feature requests and bug reports in the Github repository issue tracker will receive a response, and possibly also be implemented (especially bug fixes). However, active development on this package has ceased.

## Installation
The `puppet-lint` gem must be installed. The minimum supported version of `puppet-lint` is 2.1.0. The Linter and Language-Puppet Atom packages are also required.

Note that at this current time the package unit tests (outside of CI which will be Atom Beta `1.61.0` for the time being) and acceptance testing are performed with the latest stable version of Pulsar.

### Usage
- There are no special notes for using this package.
