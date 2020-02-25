# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.8.0] - unreleased

**icon-ticket (editorial) has been renamed icon-event to prevent conflict with utility icon-ticket.**

## Added

- SASS utilities: Responsive borders utilities classes.
- Maps (Cartography) integrations examples (Evenements).
- Sidebar: Allow for Sidebar Title classes.
- Iconography: position and social-flickr icons.
- Components - List Group - Content: New Small mobile content stacking.
- Patterns - Header: Content header profile.
- Templates citoyens: Élus template.
- Templates citoyens: Événement templates (Minimum and maximum variants).
- Templates citoyens: Lieux templates (Minimum and maximum variants).

## Changed
- Changed and fixed some issues and normalisation of .list-item and .list-item-icon.
- Remove margin-top from sidebars on mobile
- Components - List Item: Allow some elements to be added inside list-item-content (links, bold, etc).
- Components - List Group: .list-group-item-infos default and .list-group-complex font size.

## Fixed
- Changed icon-ticket to icon-event to prevent 2 icons having same name (icon-ticket in utility and icon-ticket in editorial)
- Fix padding bottom for region-content on mobile.
- Fix Feedback form validation integration in all templates.
- Buttons: btn-collapse btn-sm and btn-reversed integration.
- Components - Cards - document: Fix sm breakpoint flexbox values.


## [4.7.0] - 2020-02-12

**icon-warning has been renamed icon-error and a new icon-warning icon has been created. Please review your icons integration accordingly.**

### Added
- Sidebar Block: Handling of spacing between multiple .list inside a single .sb-block (Programmes > contacts)
- Components - Badges: New .badges-notification.
- Components - Buttons: Modifier for dialog-colors (success, danger, warning, info, danger).
- Components - Cards - Document: Add example for marking untranslated Document content.
- Components - Chips: New .chips-xs examples.
- Components - List-group: .list-group-complexe examples.
- Components - Main-navbar: Navbar mini example.
- Components - Main-navbar: .is-mini class to use when main-navbar is sticky and is not used with language bar.
- Components - Toasts: Add toasts (snackbar) example and styles.
- Patterns - Footer: Added minimalist and hybrid footer examples.
- Templates Citoyens - Layout pages: Page layout minimal example (mini main-navbar and minimalist footer)
- Templates - index: Add example for badge-primary usage in applied filters section.
- Icons - utility: filters, error and ticket icons.

### Changed
- Add class to hide illustration on homepage for mobile.
- Normalization of overlay rgba with overlay-[x] and overlay-[x]-reversed variables.
- Styles - Links: normalisation between inline and element links. Added ability to put .icon span tags inside inline links.
- Components - Buttons: reversed, hover and states.
- Components - Buttons: Disabled states by hierarchy button type.
- Components - Buttons: .btn-reversed is now a modifier and can be applied to any types of buttons.
- Components - List: list-inline-interpunct icon placement handling and stacking behavior.
- Components - List-group: Add border-top to .list-group-xl
- Components - List-group: Some refactoring for .list-group.
- Components - List-group: .list-group-teaser with optionnal thumbnail or placeholder.
- Components - Cards: Removed Content-type representation. The card component is the generic reprensentation of a card anatomy.
- Components - Cards: Normalization of .card-service Title color.
- Components - Cards: Icon placeholder is now 80px and hover is $action-lighter.
- Components - Gallery: Update button classes.
- Components - Main-navbar: Search submit button on mobile conforms to btn-primary styles.
- Patterns - header: Adjustement to document-heading-sm bottom padding.
- Patterns - Pre-footer: Pre-footer is now detached from footer patterns.
- Patterns - Wrappers - Arrondissement: Center texte and button inside .wrapper-arrondissement-header.
- Patterns - Forms: Update button classes (Always use .btn-squared in forms).
- Templates - Sujet: handling of related content with and without borough wrapper.
- Templates - Article: Add featured document module example.
- Icons: icon-warning becomes icon-error and a new icon-warning has been created.
- Pattern Lab - Styles - Links: Refactoring of link inline and link element presentation with and without icon.
- Pattern Lab - Components - Buttons: New layout for buttons (Editorial, Utility and Icons)
- Pattern Lab - Components - Badges: Rework layout for badges. 

### Fixed
- Components - Buttons: focus and active-focus states.
- Links - external link: Fixed weird behavior for multiline external links.

### Deprecated
- Components - Buttons: .btn-promo.
- Components - Buttons: .btn-primary-reversed, .btn-secondary-reversed, .btn-tertiary-reversed. Use the .btn-reversed modifier instead.
- Components - List-group: .list-group-delimiter has become useless. Styles were only used by .list-group-xl.
- Components - List-group: .list-group-date.
- Components - List-group: .list-group-teaser-img. Use image tags instead. No more background-image with variable height.


## [4.6.0] - 2020-01-07

### Added
- 2 new editorial icons: location-empty and megaphone.
- Forms: example for error icons and messages for input text, textarea and select.
- Feedback form: add validation example for No option. Textarea is mandatory.
- Cards: Image placeholder for content type with optionnal image.
- Cards: New card-document variant.
- Main-navbar: Allow menu and search to be used with or without fixed positionning of navbar.
- List-group-teaser: Image placeholder for content type with optionnal image.
- Templates: examples for content-modules and content-module-stacking with different Headings.
  This is a way to reproduce the structure that we get from the content-api.
- Templates: Nouvelle.
- Templates: Index Recherche.
- Patterns: New Wrapper Sommaire navigation.

### Changed
- Headings margin-bottom adjustement (h2 = 32px, h3 = 16px, h4,h5,h6 = 8px).
- Adjustement for .content-modules and .content-module-stacked content and stacking (h2 determines section spacing)
- Roll-back to the bootstrap way for forms errors icons handling. No need for span .icon anymore.
- Forms: Labels are now Bold except for custom-form-label (checkboxes, radios and switches).
- Forms: Placeholder color chanded from $neutral-tertiary to  $neutral-secondary (Accessibility)
- Templates: Normalization of content-modules and content-module-stacked for all templates.
- Removed texture from modal Mesures d'urgences.

### Fixed
- Removed focus from active state for toggle buttons.


## [4.5.1] - 2019-11-27

### Changed
- $custom-checkbox-indicator-icon-checked svg path optimisation.
- Media gallery images: Ajustement button size (btn-sm). Handle hover and focus states. Allow placement inside content-module-stacked.


## [4.5.0] - 2019-11-26

### Added
- .drawer structure for better drawer handling
- Utility class for full-page iframe
- Disabled accordion states and styles.
- Related to links added to various Templates.
- New class (.list-group-allow-ext-icon) to allow for external link icons inside list-group.
- 4 new utility icons (partner-bell, partner-hydroquebec, exclamation, cone-fill)
- 1 modified icon (social-facebook)

### Changed
- Navigation complexe: Normalisation and in-line with design system updates.
- Template index: Modified H1 and H2 in header.
- .list-group-lg.list-group-icons-categories is Deprecated and replaced with .list-group-xl
- Publication date size for various Templates.
- Some refactoring for Unité administrative template.
- Unité administrative template: Remove Organigramme from sidebar, add info inside .content-header-extras
- Skip links is now a collection of links.
- Main-navigation: Rosace on mobile size correction (now 28px).
- Main-navigation: Language bar height correction (now 32px).
- Some elements now use $action-darker for their hover states (.btn-primary, user-avatar).
- Button focus states.
- Main navigation links and buttons focus state.
- Inputs focus states.

### Deprecated
- .page-drawer and classes used for vda311 templates.
- .menu-items-revealing-labels.
- .list-group-icons-categories.

### Fixed
- Icons in list-group shouldn't be align-items: center.
- Issues with menu on iOS devices. Last link in menu was hidden by the bottom navbar of the device.
- Cards: .multi-lg padding was wrongly calculated on mobile.
- Cards: Cards with top images (or side at larger breakpoint): Images should overlap border to create wanted effects on hover
- Cards: Focus box-shadow added.
- Badges: Focus states added back.


## [4.4.1] - 2019-11-14

### Added
- Analytics Homepage: data-component-type, data-link-title and data-link-position attributes and corresponding values.
- Analytics Vitrine d'arrondissement: data-component-type, data-link-title and data-link-position attributes and corresponding values.

### Fixed
- Homepage template: fix Dates importantes View More btn hover state should be rounded and not squared.
- Vitrine template: fix Dates importantes View More btn hover state should be rounded and not squared.


## [4.4.0] - 2019-11-11

### Added
- Homepage template and variants.
- Homepage mesures d'urgence.
- Vitrine d'arrondissement template and variants.
- Profil d'arrondissement template and variants.
- Error pages templates (404, 500).
- Maintenance page template.
- Card date variante.
- Card service variante.
- Card full-width Profile variante.
- 8 new illustratives icons: icon-city, icon-culture, icon-education, icon-farm, icon-health, icon-law, icon-service, icon-transport.
- Utility classes: .alternate-order-{breakpoint} Can be use to create an alternated left and right images with content.

### Changed
- Message bar now needs base class .alert.
- Message bar dismiss option can be triggered with data-dismiss="alert" and needs .alert-dismiss class.
- Feedback Form components update and refactoring (Simplified).
  
### Fixed
- Message bar mobile behavior is now coherent with alert behavior.
- Switches states colors.


## [4.3.0] - 2019-10-29

Header (main-navbar, menu and search) and footer structure and styles now reflect the final design implementation. Make sure you
now use the latest structure before upgrading to 4.3.0. 

### Added
- Added back breadcrumbs.
- Breadcrumbs integration in template that requires.

### Changed
- Footer Pattern update.
- Main navbar template update.
- New menu structure and behavior.
- New search structure and behavior.
- Mesures d'urgences button in navbar.
- Mesures d'urgences modal template.
- Reorganization of partial stylesheets.

### Fixed
- styles-header-footer-v4.scss is now fully optimized and usable as a standalone style sheet (ex.: For header/footer minimal styles).


## [4.2.2] - 2019-10-24

### Changed
- VDL template: List-item for GDC.


## [4.2.1] - 2019-10-16

### Changed
- Spacing for badges inside badge-group.
- Indexes empty state icon should now use icon-search.
- Indexes mobile filters (accordeons) form-group bottom padding adjustement.


## [4.2.0] - 2019-10-10

### Added
- 2 new Utility icons: table et steps.
- 3 new Editorial icons: news, ticket et not-found.
- Div variant for list-item component.
- Collectrices template and empty-state variant.
- Indexes template and variants.
- Utility class to create 2-columns lists (.list-2-columns)
- Utility class to set external-link-icon with after pseudo-class.
- New wrapper Featured Call to action.
- Flyout component.
- Chip component.
- Toggle (button-group) component.
- Lexique pattern.

### Changed
- Paragraphs and list now takes 16px margin-bottom (instead of 32px).
- Fix spacing inside .content-modules and .content-module-stacked.
- Handle heading spacing inside .content-modules and .content-module-stacked.
- Fix spacing in Démarche template.
- Fix spacing in Unité administrative template.
- Fix spacing in Sujet template.
- Fix spacing in Article template.
- Fix spacing in Programme template.
- Template employé - Vue de l'agent 311 - Finalisation.
- White background for main-navbar.
- Update pagination styles.
- Update button-group styles
- Refactor badges sizes, spacing and icons handling in styles.
- Refactor Header content fullwidth to provides more flexibility.
- List-group-teaser harmonization. List-group-teaser now always have top border and padding-bottom
- Class name for wrapper-comparatif harmonization, .content-comparatif will be deprecated in further version.
- Handling of external-icon for links needs to be set up manually in some specific cases (list-group).

### Fixed
- Prevent vdm-icon-system from cleaning too much rules from SVG, leading to some fill occuring where it shouldn't.
- Handling external-link-icon rules not preventing some link of getting part of the rule to apply (list-group).
- Badge spacing, line-height and font-size.
- Buttons line-height and spacing.
- Forms, checkbox, radios and switches sizes, and spacing.
- Container-max-width.


## [4.1.1] - 2019-09-23

### Added
- Lexique pattern.
- Vue de l'agent - Lexique
- 2 new illustratives icons: icon-notifications and icon-profile.

### Changed
- Definition list theming and variants.

### Fixed
- Column classes fixed in demarche templates.
- Remove all gallery styles that caused issues. Use photoswipe default for now.


## [4.1.0] - 2019-09-20

### Added
- Cookies Consent templates: Patterns/Cookies Consent
- Add the path to icon scss and json to build.config.json
- Added the gallery module, a custom skin placed in the images folder and the css build into the bao with the gallery.scss file
- Menu items (horizontal and vertical variant)
- 12 new utility icons.
- Template employé - Vue de l'agent 311
- Accordions listed and framed examples
- .unfixed utility class to unfix an element that uses the class fixed-DIRECTION.

### Changed
- Changing the layout of employes for the user to be logged on.
- Change Slide-menu-interne to use the menu-items component.
- PL: inputs are now reusable.
- Rules for automated external links and (PDF) mention is more restrictive (added some exclusion - list-group, list, link with icon, buttons).
- PL: removed all back links and badges from templates - waiting for more infos.

### Fixed
- Update the gulpfile to generate the correct scss of the icons
- Change the method to display the validation icon. Modify the form.scss and adding markup for displaying the icon on validation.
- Modal footer buttons alignment.


## [4.0.1] - 2019-08-27

### Added
- Unité administrative template.
- Article template.
- Sidebar social medias list.
- Content header image with left and center notch. Full-width and container grid variants.
- Footer mobile behavior (dropdowns).
- Styles > Typography > link-list-element and link-list-element-icon.
- Utilities classes for font-size-interface - font-size and line-height handling -  variants (.font-size-lg-interface, .font-size-base-interface, .font-size-sm-interface, .font-size-xs-interface)
- Documentation for the components; badges, buttons, cards, dropdown and collapse 
- Styles for buttons icon placement left or right
- Base layout template for employes 
- Base menu slide left for template employes 
- Utility class .text-preserve-space for white-space: pre usage.
- Added a readme.md file that contains a list of improvements.
- Added a automated script that concatenates jsons for icons to use in the BAO.
- Button primary-reverse variant.

### Changed
- Blockquote emphasis should be a div tag (blockquote is strickly for citation).
- .sb-block now takes 4rem margin-bottom by default.
- Cards fw now depends on grid-class for formatting at some breakpoint.
- Cards fw now takes a minimal height for image (~16:9 aspect ratio) @larger breakpoint.
- Deleting employes and citizens separation in editorial icons 

### Fixed
- List Group line-heights, paddings and margins.
- Prevent media copyright icon from being squashed when long copyright.
- Pattern Labs: Fixed various pseudo-templates inclusion.

### Removed
- Removed some cards classes (.card-sm, .card-guide, .card-events, .card-news) that introduces exception. (Cards harmonisation)


## [4.0.0] - 2019-08-15

This is the first release of BAO implementing the new design system. Many things have changed. Validate all your components and template when upgrading from previous version.

Main navbar, menu and footer are now in their own stylesheet. They will eventually be taken out of the BAO and into the shell itself. Until then, you can use styles-header-footer-v4 to include these styles in your project.

### Changed
- Pattern lab reorganisation: atoms > styles, molecules > components, organisms > patterns, Templates division between citoyens and employees.
- Vdm font icon is ditch in favor of new svgs icons. There is no direct path from the old font to the new icons. See with your designer how to migrate.
- Nunito is ditch in favor of Open Sans. Font-size and line-height have been updated consequently.
- Buttons makeover.
- Cards cleanup. Many things that used to be cards are now lists.
- List-group and list-item have changed.
- Messaging now use svg icons.
- top-banner is now message-bar.
- Custom spinner ditch off in favor of default bootstrap spinner.
- Many things have been removed from patterns.
- First draft only shows demarches and sujets templates. All others templates are deprecated and needs to be redesigned/updated.

### Deprecated
- vdm-font-icon.
- All old templates.
- Lots of molecules and organisms.


## Version 3 and earlier

The version 3 is now deprecated. Only bug fixes will be considered. Please refer to the old bitbucket repo https://bitbucket.org/villemontreal/boite-outils-web/.


[4.7.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.7.0/
[4.6.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.6.0/
[4.5.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.5.1/
[4.5.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.5.0/
[4.4.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.4.1/
[4.4.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.4.0/
[4.3.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.3.0/
[4.2.2]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.2.2/
[4.2.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.2.1/
[4.2.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.2.0/
[4.1.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.1.1/
[4.1.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.1.0/
[4.0.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.0.1/
[4.0.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.0.0/
