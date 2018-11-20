# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.5.0] - unreleased

## Added
- Page Élus (Valérie Plante)
- Templates Fiche services (Deprecated, will be removed once fiche-services are migrated to demarches)

## Changed
- .nav-anchors: .nav-top class on first element needs to be applied on li instead of a.
- Custom forms checkboxes and radios styles have changed.

## Fixed
- Fixed cards subtitle size and color.
- Fixed nav-tabs styles.
- Fixed side-menu margin-bottom.
- Fixed list-group active state styles.


## [2.4.0] - 2018-11-14

## Added
- Added Pages for Instances (sujets, collectrices, démarche).
- Added Informations pratiques collectrice (Pages > collectrices).
- Added Maintenance page.
- Added Demarches pages for Déneigement (Pages > Demarches).

## Changed
- Harmonisation of all line-heights. Use of variables and fix some weird case of line-height inheritance. 
- Updated font-icon to version 1.1.5.
- Changed Collectrices Content Header styles.
- Changed Card-tarif markup and column classes.
- Templates need to have DUMMY content. No real content should be use. Start refactoring now that we have pages.
- Pattern Lab: Added dynamic value for several templates and organisms so they can be used to generate PAGES more efficiently.

## Fixed
- Content header paddings and spacing, harmonisation of spacing with optionnal content.
- Fixed custom-checkboxes background-image Windows10/IE11 issue. Rolled-back to inline-svg like bootstrap does.


## [2.3.0] - 2018-11-05

## Added
- Contact form in modal alternative for sidebar coordinates block. Needed for Élus.
- Jumbotron
- Collectrices Élus template
- Collectrices Nouvelles V2 template

## Changed
- Updated font-icon to version 1.1.3 (115-glissant and 116-signalisation)
- Changed Social medias placement in Sujet templates.
- Changed Contact block in Sujet templates and fixed spacing for multiple contacts.
- Clean-up all json files, removed unused data.
- Normalize Collectrices (hubs) structure (heading, results, pagination).
- Normalize .page-section and .region-congent padding.
- Patternlab : New directory of templates for Future Evolution.

## Fixed
- Fixed padding between two adjacent section with .bg-gray-sky


## [2.2.0] - 2018-10-26

## Added
- Added new organisms for .subnav.
- Added $font-size-xs variable.
- Added pages section in patternlab and created 2 pages for Animaux presentation based on real content.
  
## Changed
- Updated base-font-size to 18px.
- Updated font-size scale to 12px, 15px, 18px, 21px and 24px.
- Updated headings and display font sizes.

## Deprecated 
- .navbar-services have been replaced with a simplified .subnav structure. Organisms > navigation > Subnav Services

## Removed
- Removed $font-size-md and migrate to equivalent $font-size-sm

## Fixed
- Fixed various issues regarding flexbox in .list-group-content and .list-group-hub
- Fixed html structure for some cards in collectrices.


## [2.1.0] - 2018-10-18

## Added
- Added templates and variantes for Collectes (templates > collecte).
- Added templates and variants for Search results page (templates > recherche).
- Added template for Avis et alertes.
- Added loader (atoms > feedback > loader).
- Added button with loader (atoms > button).
- Added Promo section on homepage.
- Added list-group variant for .list-group-hub and .list-group-content.
- Added empty-results content and styles for collectrices and search pages.

## Changed
- Changed json structure for sidebar elements (patternlab only).
- Changed class name from .select-arron to lead-left-content or .lead-right-content and updated lead molecule.
- Collectrices updated: nouvelles, avis et alertes, 1er niveau, 2e niveau.
- Lieu template updated: sidebar, list-group, map, header.
- Updated Homepage data and structure.
- Updated Feedback form theming.
- Updated list-groups for complexe data layout.

## Deprecated
- .section-select-arron and .select-arron have been replaced with more generc classes .section-lead and .lead-right-content or .lead-left-content in layout.scss. Changes are reflected in the lead molecule.

## Fixed
- Max-width set to 1450px for .content-header-title.


## [2.0.0] - 2018-09-28

## Added
- Added Evenement templates and status variants.
- Added Map integration exemples for mapbox inside evenement.
- Added content header variants for evenement needs.
- Added Media-gallery organisms. Work in progress.
- Added Cards variant for Evenement content type.
- Added data in the Démarche templates (canaux, documents).
- Added list-group links in molecules > list groups.

## Changed
- Changed badges styles and moved badges to atoms.
- Changed html markup and classes for content-header to fix responsive issue.
- Updated font-icon to v1.1.2 - (113-prix and 114-telecopieur).
- Changed footer theming for a darker version.
- Changed html markup and styles for list-icon in sidebar and contact block.

## Removed
- Removed unused .list-numbered styles and examples.
- Removed unwanted section in templates (démarche), change section title (sujet).

## [1.3.0] - 2018-09-13

## Added
- Added sections for sujet template.
- Added styling of external link with css partial selector on .region-content. 
- Added handling of exception to external link (cards, list-icon, social-media-list).
- Added styling of pdf document with css partial selector.
- Added same domain (montreal.ca) links and exernal links to show styings.
- Added molecules > empty states.
- Added ability to add borough selector inside of lead container (needed for demarche templates).

## Changed
- Changed Démarche template.
- Changed html structure for card-tarif mobile first layout and better responsive handling.
- Changed font-icon version to 1.1.0 - New icon (112-lien-externe).
- Changed collapsible theming.
- Changed to list-icon and integration of list-icon in sidebar.
- Changed link theming in sidebar and list-icon.

## Deprecated
- molecules > search-field-combo-base, search-field+dropdown

## Removed
- Removed molecules > search-field-combo-base, search-field+dropdown from patternlab.

## Fixed
- Fixed some issues with sidebars html structure and classes.
- Fixed .btn-link focus state border issues.
- Fixed collapsible theming in IE.


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


[2.4.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/2.4.0/
[2.3.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/2.3.0/
[2.2.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/2.2.0/
[2.1.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/2.1.0/
[2.0.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/2.0.0/
[1.3.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.3.0/
[1.2.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.2.0/
[1.1.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.1.0/
[1.0.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/1.0.0/
[0.3.2]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.2/
[0.3.1]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.1/
[0.3.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.3.0/
[0.2.2]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.2.2/
[0.2.0]: https://bitbucket.org/villemontreal/boite-outils-web/src/0.2.0/
