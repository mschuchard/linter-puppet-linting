# linter-puppet-linting

This Atom package is the new home of AtomLinter/linter-puppet-lint. That package was no longer able to be maintained due to lack of administrator permissions to fix the continuous integration tests and/or bypass the protected branch status. Therefore I have migrated the package I formerly maintained there to its new home here.

This package provides linter support for your Puppet manifests through Atom-Linter using Puppet-Lint.

![Preview](https://raw.githubusercontent.com/AtomLinter/linter-puppet-lint/master/linter_puppet_lint.png)

### Atom Editor Sunset Updates

`apm` was discontinued prior to the sunset by the Atom Editor team. Therefore, the installation instructions are now as follows:

- Locate the Atom packages directory on your filesystem (normally at `<home>/.atom/packages`)
- Retrieve the code from this repository either via `git` or the Code-->Download ZIP option in Github.
- Place the directory containing the repository's code in the Atom packages directory.
- Execute `npm install` in the package directory.

Additionally, this package is now in maintenance mode. All feature requests and bug reports in the Github repository issue tracker will receive a response, and possibly also be implemented. However, active development on this package has ceased.

## Installation
The `puppet-lint` gem must be installed. The minimum supported version of `puppet-lint` is 2.1.0. The Linter and Language-Puppet Atom packages are also required.

### Usage
- There are no special notes for using this package.
