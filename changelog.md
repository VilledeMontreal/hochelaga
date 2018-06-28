# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Header refactoring
- Side menu refactoring

### Fixed
- .btn-light and .btn-inverse buttons active state text and background color fix.

## [0.2.2] - 2018-06-18

### Fixed
- Cleaned up old master branch from unwanted files

## [0.2.0] - 2018-06-14
### Added
- Color: Sarcelle variants lightest, light and dark.
- Color: gray-ink and gray-sky added as main neutral colors.
- Forms: file-dropzone styling.
- Box, box-header and box-content to create a white box over gray background. @see patterns/templates/services/dashboard
- Cards-alert variants.
- Cards interactivity.
- Buttons interactivity.
- Services header.
- Optionnal icons inside buttons.
- New organisms patterns: feedback form.
- New templates patterns: fiche-details, homepage, news.

### Changed
- Bootstrap 4.1.1 upgrade
- Container outter padding as pass from 15px to 30px to give more space on both side.
- Margin and padding utility classes now use a .5rem (8px) step. m-0 is .5rem, m-1 is 1rem etc.
- Buttons now stick to bootstrap .btn class convention. We provide .btn-primary and .btn-secondary. .btn-sm, .btn-light and .btn-inverse variants available for the 2 buttons types. 
- Headings and display font-size tweaks.
- Dialog colors tweaked.
- Links default style now contains a border-bottom. Override in various components.

### Fixed
- Missing name tag for group of radio buttons.

### Removed
- Removed vdm prefix for buttons classes