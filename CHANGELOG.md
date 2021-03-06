## Next
- Add config option to load a file containing custom checks.

## 1.0.0
- Migrate to new organization.
- Fix all functionality issues with package.

## 0.9.1 (Unreleased)
- Correct minimum supported version to 2.1.0.
- Fix minimum supported version check accuracy.

## 0.9.0
- Updated Atom dependencies.
- Fix `skipPuppetUrlWithoutModules` config option.
- Bump minimum supported `puppet-lint` version to 2.0.0.
- Future-proof `puppet-lint` output parsing.
- Change display of `puppet-lint` errors to Atom error notification.
- Fix false warning thrown for `classname not in autoload module layout`.

## 0.8.4
- Respect project's `.puppet-lint.rc` configuration.
- Removed functionless config option.

## 0.8.3
- Uses Linter v2 API.
- Updated dependencies.
- Added skip option for ArrowOnRightOperandLine.

## 0.8.2
- Fix a bug in how the functions were being declared
- Update dependencies

## 0.8.1
* Fix a bug if invalid options were manually set in the Atom config file

## 0.8.0
* Added severity attribute
* Optimized package loading and linting execution times
* Added `error-level` option
* Now capturing the errors puppet-lint throws to stdout
* Updated dependencies
* Made row and column of warnings and errors more precise

## 0.7.0
* Code efficiency improvements, cleanup, and generally faster now
* Updated dependencies
* Added skip for 140 char check for PuppetLint > 1.1.0 and automatic fix (`-f` arg) option

## 0.6.3
* Fix oldVersion flag being incorrectly set (#51)

## 0.6.2
* Update dependencies

## 0.6.0
* Install dependencies on activation

## 0.5.0
* Added support to set the right column number
* The plugin now uses a custom log format. This makes the plugin incompatible with old versions of puppet-lint

## 0.4.0
* Rewritten in javascript
* Linter ^3.0.0 compatible
* Enable/Disable individual check in settings
* Changed to lint on save
