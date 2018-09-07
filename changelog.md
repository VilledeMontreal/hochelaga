# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [1.3.0] - Unreleased

## Added
- Added sections for sujet template.
- Added styling of external link with css partial selector on .region-content. 
- Added handling of exception to external link (cards, list-icon, social-media-list).
- Added styling of pdf document with css partial selector.
- Added same domain (montreal.ca) links and exernal links to show styings.
- Added molecules > empty states
- Added ability to add borrough selector inside of lead container (needed for demarche templates).

## Changed
- Changed Démarche template.
- Changed html structure for card-tarif mobile first layout and better responsive handling.
- Changed font-icon version to 1.1.0 - New icon (112-lien-externe)
- Changed collapsible theming.
- Changed to list-icon and integration of list-icon in sidebar

## Deprecated
- molecules > search-field-combo-base, search-field+dropdown

## Removed

## Fixed


## [1.2.0] - 2018-08-27

## Added
- Added featured-content molecules.
- Added card variants for members and links
- Added nav-anchors molecules
- Added template for Instances and commissions.
- Added templates variants for comité exécutif and commission.

## Fixed
- Fixed numerous IE bugs, mainly flexbox related.
- Fixed slide-menu IE bug.

## [1.1.0] - 2018-08-21

## Added
- Added template for Élus.
- Added content-header variant for profiles template types.

## Changed
- Changed sidebar organisation in patternlab.
- Clean-up unused sidebar examples and unnecessary class bloating the sidebar examples.
- Esthetic changes to some cards variants.
- Added list-groups specific theming
- Moved all lists to atoms > lists

## Removed
- Removed some variants for sidebars, cards and base layout templates.

## [1.0.0] - 2018-08-16

## Added
- .btn-quit a quit button with icon on the right
- Added 3 variants for modals: .modal-alert, .modal-icon and .modal-user with static and live examples.
- Added 2 new card variants for tarification (teaser and table).
- Added responsive values for all headings, display-headings and lead.
- Added new template for Page sujet.

## Changed
- Changed Wizard header styling
- Minor changes to wizard steps: solved responsive issues and theming upgrades. 
- Minor changes to default modal styles.
- Changed breadcrumb integration and style.
- Changed some display-headings and lead values.
- Refactoring of content headers. Simplification and harmonisation of all content headers html and css
- Refactoring of footer.
- Changed nav tabs theming.
- Changed tables and tables variant theming.
- Changed hubs templates.
- Removed some variants for tables and pagination.

## [0.3.2] - 2018-07-31

### Changed
- changed navbar logo breakpoint sizes for tablets


## [0.3.1] - 2018-07-25

## Added 
- Added new color $sarcelle-light aka pepermane.
- Added some templates variants (authenticated, profile, notifications) for organisms > navigation > navbar
- Added .elided-text utility class.

### Changed
- Upgraded to Bootstrap 4.1.3
- Upgraded to font-icon 1.0.9
- Changed padding, sizing and buttons styles for navbar.
- Changed connected vs non-connected icon in navbar.

### Fixed
- Fixed js files in distribution
- Fixed $sarcelle-lightest hex color
- Fixed wrong color for $gray-600

## [0.3.0] - 2018-07-06

### Added
- New navbars and menus in Organisms > Navigation.
- Added btn-clear for clearing value of input in Atoms > Forms > Input Has Clear.
- Added new navbar with main navigation and menus (main menu and user menu).

### Fixed
- .btn-light and .btn-inverse buttons active state text and background color fix.

### Changed
- vdm-font-icon handling changed for the Boite-a-outils project.
- Switched from .vfi back to .vdm prefix for all icons from the font.
- Switched back to the original icon names, dropping the gulp tasks used to 
remove index from the name. Which makes it possible to update font-icon without publishing a new release of the boite-a-outils.
- Kept font-icon sass-map but with the original icons names.
- Clean-up sidebars and removed unused classes.
- Changed markup structure for input-group-icon.

### Removed
- Removed all the old .vdm-header theming and classes in favor of the new navbar and slide-menu.
- Removed box-shadow on focus for all main navbar buttons.



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

[1.2.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.2.0/
[1.1.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.1.0/
[1.0.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.0.0/
[0.3.2]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.2/
[0.3.1]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.1/
[0.3.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.0/
[0.2.2]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.2.2/
[0.2.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.2.0/
