# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [5.0.0] - unreleased

### Changed
- Retrait du tilde importer qui causait problème avec des versions récentes (15+ d'angular). Devrait être transparent dans des versions récentes de sass (dart-sass).
- Components Accordeon: Ajustement structure accordeon et fix disabled state.
- Components Étiquettes: Fusion de la variante light. Modification des schemas de couleurs des étiquettes.
- Components Badge: Harmonisation des schémas de couleurs avec les étiquettes. Ajout d'une bordure.
- Components Boutons: Ajustement couleur de fond des boutons secondaires et tertiaires (non inversés)

### Added
- Styles - iconographie: Ajout des icones social-threads, social-twitch, social-vimeo.
- Styles - iconographie: Ajout des icones accessibilite, astuce, communiquer, demander, erreur, payer, permis, securite, signaler, trouver, trouverMap.
- Components Accordeon: Ajout du bouton Tout ouvrir / Tout fermer avec exemple de script.

### Fixed
- Styes - typographie: correction bogue artefact sur lien avec la classe .is-external-link

### Deprecated
- Components - Accordeon: retrait de la version small.
- Components - Accordeon: retrait de la version Framed. La version listed est la seule qui devrait être utilisé.
- Components - Entree de données: Les versions small des input text, textarea et select sont deprecated et retiré des exemples.

## [4.24.3] - 2023-05-24

### Fixed
- Components - Chip: Ajustement de la largeur maximale (.chip-max-width) à 295px.

## [4.24.2] - 2023-05-16

### Fixed
- Components - Etiquette: Ajustement de la largeur maximale (.badge-max-width) à 295px.
- Components - Tuiles: Ajustement padding et placeholder pour .card-document.
- Components - Tuiles: Assouplissement des règles pour .card-img.
- Components - Liste d'objets utilitaires: Retrait du Uppercase et ajustement du font-size pour le type.

## [4.24.1] - 2023-05-02

### Fixed
- Styles - Link: .is-external-link doit être overridé dans certain cas particulier (list-item, list-group).

## [4.24.0] - 2023-05-02

### Changed
- Components - Tableau: ajustement caption et tfoot.
- Styles - Link: modification .is-external-link pour empecher l'icone :after d'être orphelin sur une nouvelle ligne.

## [4.23.1] - 2022-12-07

### Fixed
- Components - Feedback form: Correction bouton disabled.
- Components - Feedback form: Correction couleur de liens.
- Components - Message Ciblé: Correction bouton disabled.

## [4.23.0] - 2022-11-18

### Added
- Components - Barre de navigation: Ajout du lien Accèder au contenu.
- Styles - Iconographie: Ajout de l'icone cell (icon-cell).
### Changed
- Components - Tabs: Ajustement des espacements, du focus et des différents états. Ajout d'attributs d'accessibilité.
- Components - Messages ciblés: A11y - utilisation d'un tag strong pour le titre du message ciblé.
- Components - Barre de navigation: A11y - Ajout de aria-label sur les bouton hybrides.
- Components - Barre de navigation: Logo Ville de Montréal n'est plus un lien dans la Barre de navigation Service numérique.

### Fixed
- Components - Message ciblé: Correction background-color pour lien pdf.

## [4.22.0] - 2022-06-29

### Added
- Components - Encadré: Ajout du composant encadré et variant.
- Components - Message important: Gestion du responsive (small mobile).
- Components - Message ciblé: Ajout d'un message de type Urgence avec icon-emergency
- Components - Modal: Ajout d'une version compacte mobile (.modal-compact)
- Styles - Iconographie: Ajout de l'icone urgence (icon-emergency)

### Changed
- Components - Accordeon: Retrait du margin bottom sur le dernier element pour toujours avoir 16px comme margin bottom sous le contenu.
- Components - Accordeon: A11y - Utiliser un bouton au lieu d'une balise <a>. Gestion du focus  vers l'intérieur de l'élément. Ajout d'attribut aria pour l'accessibilité. Utilisation d'un niveau de titre si possible.
- Components - Cards: Passage de border à box-shadow pour se conformer au design system.
- Components - Cards: Type xs > sm et retrait de l'uppercase.
- Components - Cards: Retrait du sticky bottom sur les classes suivante: card-text-interface, card-date-text, card-publication-date. La classe utilitaire .card-text-sticky-bottom doit être utiliser en cas de besoin mais le design system ne recommande plus d'élément sticky-bottom dans les tuiles.
- Components - Filtres (chips): Ajout état désactivé.
- Components - Entree de données: Ajustement des éléments de formulaires. Ajout icône interactive d'information. Ajout compteur de caractères. Déplacement du texte d'assistance.
- Components - Interrupteur: Modification état OFF.
- Components - Couleur de l'état désactivé pour les éléments suivants: Case à cocher, case à cocher encadrée, bouton radio, bouton radio encadrée, interrupteur, boutons secondaire et bouton tertiaire.
- Components - Barre de navigation: Harmonisation des barres de navigation.
- Components - Barre de navigation: Modification de l'icône du bouton mesures d'urgence.
- Components - Message ciblé: Icone informatif - Retrait de aria-hidden="true" et ajout d'un aria-label
- Compoentns - Message global: Changement de l'icône icon-error pour icon-emergency pour le message de type negatif (rouge).

### Fixed
- Components - modale: Correction des modales plein écran sur mobile. Dans certaines conditions, la modale est partiellement caché par l'interface du téléphone.

### PatternLab
- Components - Filtres (chips): Modification de l'affichage par type de filtre.
- Components - Cards: Ajout d'une étiquette (badge).
- Components - Cards: Ajout de la date en gras.
- Components - Cards: Remplacer Cards par Tuiles dans l'interface.
- Components - Modal: Renommer pour modale.
- Components - Progres bar: Renommer par Indicateur de progres
- Components - Message - Alertes: Renommé par Message ciblé
- Components - Message - Message bars: Renommé par Message global
- Components - Message - Popovers - Renommé par Message flottant.
- Components - MessageL Retrait des exemples sans icône.
- Templates-citoyens - index: Passage de chip-xs à chip-sm.

### Deprecated
- Components - Filtres (Chips): extra-small version.

## [4.20.0] - 2021-12-08

### Added
- Styles - Iconography - Utility: Ajout de 11 icones utilitaires:  5min, 15min, 30min, activity, anomaly, compass, maximize, minimize, timer, timer-off et vehicule.
- Components - Chips: Classe utilitaire .chip-max-width pour des chips à largeur maximal.
- Components - Chips: Classe utilitaire .chip-group pour gestion du spacing des chips.

### Changed
- Components - Chips: label tronqué si plus long que la largeur disponible.
- Styles - Iconography - Utility: Modification de l'icône reorder.

### Fixed
- Components - Cards full width document: Correction placement image et texte a certain breakpoint.
- Components - Forms - Checkbox: Correction pour le svg et le placement de l'état :indeterminate

### PatternLab
- Node 16.
- Nouveau package-lock en v2 pour node 16.


## [4.19.0] - 2021-09-29

### Added
- Styles - Iconography - Utility: Ajout des icones utilitaires chevron-double-left et chevron-double-right.

### Changed
- Bootstrap: Mise à jour mineure vers Bootstrap 4.6.0 et mise à jour des dépendances (jquery, popper).
- Components - Dropdowns: Modification style .active. Ajout A11y pour dropdown-item disabled.
- Components - Etiquette: Modifications des examples proposé dans la BAO.
- Components - Étiquettes: Ajustement du border-radius à 2px.
- Components - Media - Galerie:
  - Ajout de l'étiquette pour le nombre d'image.
  - Retrait du bouton Afficher.
  - Le conteneur principale est figure pour gerer le caption.
  - Cursor: zoom-in.
  - Copyright est une étiquette avec classe badge-hidden-label et js-trigger-copyright.
- Components - Messages: Plus possible de créer des messages neutres. Style par defaut = info.
- Components - Messages: Les boutons prennent les styles .btn-squared et les couleurs des messages par defaut. Plus besoin de passé les classes btn-info et btn-squared.
- Components - Liste d'objets utilitaires: Exemples sous forme de liste (ul/li) plutôt que divs.
  Passage au breakpoint md pour la gestion du mobile.
  Ajout de classe pour gestion de l'espacement.
  Modification de l'alignement vertical des cases à cocher/icone, étiquettes et bouton en haut.
  Ajout d'un variant pour infos complementaires 'stacked'.
### Deprecated
- Components - Dropdown: Retrait de la section Ajouter un élément (utiliser un élément de menu avec icône)
- Components - Dropdown: Retrait de l'exemple States.
- Components - Etiquette: Ne peuvent plus être des liens.
- Components - Etiquette: L'icône doit toujours être à gauche.
- Components - Media: Le copyright est maintenant une étiquette(badge). Tout le reste est deprecated.
- Components - Messages: Retrait des exemples neutres.
- Components - Navigation - Side nav: Retrait du variant disabled de tous les exemples.
- Components - Pagination: Retrait du variant Small.
- Styles - Tables: Retrait du variant Small.
### Fixed
- Ajout fds manquante (close.scss) dans styles-header-footer-v4
- La case à cocher ne s'affichait plus dans le composant Liste d'objets utilitaires.

### PatternLab
- Minimum requirement: Node 12, PHP 7, Gulp 4.
- Migration vers Node 12, Gulp 4.
- Réécriture des tâches gulp en version 4.

- Components - Liste d'objets utilitaires/Liste d'objets éditoriaux (List group): Séparé depuis List Group et renommé avec la nomenclature officielle.
- Components - Liste de liens(List group): Séparé depuis List Group et renommé avec la nomenclature officielle.
- Components - Liste de contenu (List item): Renommé avec la nomenclature officielle.
- Components - Etiquette: Renommé avec la nomenclature officielle.
- Components - Media: Déplacé depuis styles.
- Components - Media - Galerie: Déplacé depuis Gallery et renommé avec la nomenclature officielle.
- Components - Tableau: Déplacé depuis styles et renommé avec la nomenclature officielle.
- TODO: Mettre à jour ce qui est deprecated dans dart-sass / Possible impact sur les projets qui compile sass.
## [4.18.0] - 2021-08-05

### Added
- Components - Buttons: New utility class .btn-swap-label-[BREAKPOINT] to swap label for icon below a certain breakpoint.
### Changed
- Styles - Colors: Change colors names - Harmonisation Design System.
- Components - Forms - Required: Change colors and fix padding.
- Components - Forms - Checkbox wrapper and radio wrapper: control element align top.
- Components - Forms: Update disabled label color for accessibility.
- Components - Buttons: Update disabled label color for accessibility.
- Components - Button-group: Update disabled label color for accessibility.
- Components - Toasts: Add variants and new button structure.
- Components - List-group: Add border-bottom on last element.
- Components - List-group: Add 16px of padding.
- Components - Collapse - Accordeon: Add border-bottom on last element.
- Patterns - En-tête interne: Adapt pattern to meet new specs.
- Templates - Unité administrative: Various modules added, sidebar revamp.
- Templates - Programmes: Partners display mode. List and logos.
- Templates outils interne - Vue de l'agent: Harmonisation with design system.
- Templates outils interne - Vue de l'agent: Lexique harmonisation with design system.

### Removed
- Components - List-group - List complexe icon editorial
### Fixed
- Components - Cards - Document: image is no longer being stretch by flex.
- Components - Cards - Profil: prevent .card-text-interface from being sticky bottom of card.
- Components - Messages - Popover: Fix spacing.
- Components - Navigation - Side nav: Fix padding for large breakpoint.

## [4.17.0] - 2021-03-24

### Added
- Components - Modals: New .modal-footer-order class to handle button html order vs design positioning
- Components - Spinner: New modal option to display spinner in modal mode.

### Changed
- Components - Modals: Close button switch to $action.
- Components - Modals: Modals sizes - Small as default, medium and large (full page).
- Components - Modals: modal-footer optimisation - Mobile button placements, button order and visibility.
- Components - Spinner: Change color to $info.

### Deprecated
- Components - Modals: .modal-footer-buttons wrapper is deprecated. buttons should go directly inside modal-footer
- Components - Spinner: Reverse mode.


## [4.16.0] - 2021-03-16

### Added
- Styles - Iconography - Utility: New social-medium icon (.icon-social-medium).
- Components - spinner: spinner-reversed variant.
- Components - Card - Profile: Image profile placeholder.
- Components - Navigation - Nav filters.
- Templates - Collecte: New Collecte template and variants.
- Templates - Élu et Profil: New Profil template. Refactor under Élu et profil directory.
- Templates - Contact: New contact template.
- Templates - Contact - Confirmation: New confirmation template.

### Changed
- Components - Forms - Switch: Colors adjustement to inactive, inactive disabled and active disabled states.
- Components - Spinner: size, default color and optionnal text.
- Components - Card - Profile: Styles + subtitle.
- Components - Card - Simplification de la gestion du padding.
- Components - Card - Allow ul.cards>li structure without any additionnal classes.
- Components - Messages: Icon size for empty state and confirmation state is now standard 40px (editorial-icon size).
- Components - Messages - Empty State: Add utility class to center text.
- Templates - Index - No Filters: New index template variant (No filters).
- Templates - Élu et profil: Profil templates is based on the Élu template.
- Templates - Élu et profil: Social media is moved to a new block inside sidebar content.
- Templates - Article, Événement, Lieux, Nouvelle, Programmes: Module étiquettes Title + positionning.

### Fixed
- Badges-container: removed overflow: hidden rules that hide focus styles of badges.

### Deprecated
- Components - Navigation - Sub nav


## [4.15.0] - 2020-12-17

### Added
- Components - Main-navbar: navbar-btn danger variant.
- Templates - Accueil: Mesures d'urgence intermediaire.

### Changed
- Components - Content header - Mesures d'urgence: Icon size.
- Components - Main-navbar: Update mesures d'urgences modal with new modal-centred-icon.
- Components - Modals: Mesures d'urgences becomes modal-centred-icon with normalized styles.


## [4.14.1] - 2020-10-13

### Fixed
- Components - Forms: For backward compatibility support .required and .form-group-required for required fields.


## [4.14.0] - 2020-10-08

### Added
- Utilities: New .w-256 and .w-440 sizing classes.
- Styles - Links: .dropdown-toggle can be used with .link-list-item.link-has-icon to add dropdown chevron for list-item links.
- Styles - Media: New .media-profile-color-{1,10} utility class for accessible profile color
- Styles - Media: New media avatar img example.
- Components - Dropdowns: Add optionnal description
- Components - Dropdowns: Add .dropdown-action for Action links
- Components - Dropdowns: Add .dropdown-item-danger utility class.
- Components - Dropdowns: Add media-avatar integration inside dropdowns
- Components - Navigation - Stepper: Stepper (wizard).
- Components - Navigation: Sub nav icons only variant.
- Components - Tooltip: Expose tooltip component and examples.
- Templates - Wizard: New wizard template.
- A11Y - Components - Forms: Add aria-describedby + id for help text and error messages.

### Changed
- Components - Badges & Tags: Labels font-size: 14/20.
- Components - Dropdowns: labels are now font-size: 16/24.
- Components - Forms: Use * (required) instead of optionnal.
- Components - Forms: Upscale font-size for label and input (16/24) for default and (14/20) for small.
- Components - Forms: Upscale font-size for help text and error text (14/20).
- Components - Forms: Upscale input file button and text (16/20).
- Components - Forms: Restrict .rounded use for inputs AKA searchbar.
- Components - Forms - Select: Use custom-select.
- Components - Forms - Switch: Controler is now shown AFTER the label (justify right) and center vertically for multi-line label.
- Templates - Evenement: Evolutions - Multiple evolutions, add virtual and recurent events display.
- PL - Components - Breadcrumbs: Moved breadcrumbs to own component directory.
- PL - Components - Tabs: Moved tabs to own component directory.

### Fixed
- Styles - Tables: .sorting-asc and .sorting-desc icons inversion.
- Components - Dropdowns: Fix spacing and clickable zone for checkbox and radios inside dropdown.
- Components - Forms - Select: Custom select background and padding fixes. Validation fixes.
- Components - Navigation: Fix issues with some navigation and removed unused/deprecated/never added to Figma navigation variants.


## [4.13.0] - 2020-08-27

### Added
- Breakpoint: New xsm breakpoint at 352px for small mobile handling.
- Styles - Tables: Sorting styles with .sorting-asc and .sorting-desc states.
- Components - Controls - Input stepper: New control component: input-stepper.
- Components - Forms: New checkbox wrapper and radio wrapper components.
- Patterns - Wrapper: Generic structure for complex wrapper based on wrapper-arrondissement structure.
  TODO: See if we can merge wrapper-arrondissement inside generic wrapper complex structure.
- Templates - Collectrices: Add featured cards to sidebar.
- PL - Styles - Tables examples: Added Column header and row header examples.

### Changed
- Styles - Tables: Removed border-top from thead th and add double border-bottom to thead th.
- Components - Controls: Button groups color normalisation for 3 states: active, inactive and disabled.
- Components - Forms: Normalisation of checkboxes and radios label to 14/20.
- Components - Pagination: Conforms to button-group specs.
- Templates - Index: swap light badges for strong in result lists.
- Templates - Lieux: Evolutions - Added sections, refactored lists, added activity module, swap map for card-location.
- Templates - Lieux: Center content when no sidebar.
- Templates - Index - Recherche: Swap pagination for Load more button. Add rudimentary mecanism demo for focus and items display.

### Fixed
- Components - Accordion inside wrapper: Fix spacing bottom to 32px.
- Components - Cards: Fix card location double container with duplicated ID.
- Components - Messages - Alerts: Fix external link icon color.
- Components - Messages - message bar: Fix external link icon color.
- Components - List Item: Fix external link icon on simple list Action label.


## [4.12.0] - 2020-07-20

### Added
- Iconography - Utilitary: icon-flag-fill, icon-heart-fill, icon-history, icon-location-off, icon-reorder, icon-roadsection, icon-rss, icon-selection, icon-star-fill, icon-star-half, icon-user-minus, icon-user-plus and icon-user-x, icon-wifi and icon-wifi-off added to vdm-icon-system.
- Iconography - Editorial: icon-success and icon-empty added to vdm-icon-system
- Typography - Text utilities: New .text-{dialog}-reversed variant.
- Components - Badges: Add .badge-notification-reversed.
- Components - Badges: Add color variants.
- Components - Cards: Add Card location.
- Components - Forms: Form input file and uploaded file list examples.
- Components - List item: Possibility to add dialog color (.text-{dialog} or .text-{dialog}-reversed) to bold element under the Label.
- Components - List item: Add examples for list items.
- Components - Messages: Empty state and confirmation state examples.
- Templates - Démarches: Add examples for phone extension integration inside list-item.
- Templates - Démarches: Add examples for location "state" inside list-item using .text-{dialog} or .text-{dialog}-reversed utility classes.

### Changed
- Print: Hide elements in the print stylesheet (navbar, breadcrumb, feedback section, footer).
- Iconography: icon-plus was modified.
- Components - Badges and Tags: Separation of badges and tags to reflect Library state.
- Components - Collapse - Accordion Framed: change icons for icon-plus and icon-minus.
- Components - Progress - Circle: Now conform to Design system. Used .bg-{color} for dialog color variation.
- Components - List item: Refactoring to allow more flexibility inside component.
- Components - Navigation: Clean-up examples and removed deprecated examples.
- Templates - Démarches: Refactoring of Needed documents section.
- PL: Rename messaging components directory to messages.

### Fixed
- SASS: fix @extend of .nav-link.active to only extend .active [https://sass-lang.com/documentation/at-rules/extend#limitations](SASS Extend Limitations).
- Components - Badges: Fix left and right spacing.
- Components - List Item: Fix simple list Item hover background.
- Components - messages: Fix alert-actions spacing.
- Templates - Démarches: Fix various spacing issues with badge states and accordions content.
- PL - mapbox integration: fix mapbox integration preventing map rendering in view-all pages.

## Removed
- Iconography - Editorial: icon-not-found was removed from the vdm-icon-system project.
- Iconography - Utilitary: icon-loction was removed. This was an artefact from a wrong file-name. Should use icon-location instead.
- Components - Progress: .progress-{dialog-color} remove (unused and undocumented). Caused conflict with progress-info text wrapper.


## [4.11.1] - 2020-06-12

### Fixed
- External link icon should not be applied inside cards.


## [4.11.0] - 2020-06-08

### Added
- Components - Badges: New .badge-max-width utility class for max-width badges to 288px.
- Components - Chips: Rounded corners and spacing tweaks.
- Components - List-group: Add example to float badge left of teaser.
- Components - Forms - File upload: New component for file-upload.
- Templates - Lieux: Add Full width bar messaging (TC diffusion).
- Templates - Index: Add Full width bar messaging example.

### Changed
- Components - Badges: Badges are now auto-truncated if label is longer than the viewport or zone they reside inside.
- Components - Badges: .badge-group and badges-container is now flex-based to allow truncation and spacing uniformisation.
- Components - List-group - Clickable wrapper: Medium is downsized to 14/24 (height 40px) - montreal.ca will switch to large.
- Templates - Index: Use updated chips and switch breakpoint for mobile breakout of filters.
- Templates - Sujet: Automated list ordering.
- Templates - Collectrices: Switch to large clickable wrapper for lists.
- Templates - Sujets: Switch to large clickable wrapper for automated lists.
- Templates - Unités administratives: Switch to large clickable wrapper for automated lists.

### Fixed
- Components - Messaging: Full width bar Warning text and icon color is now $neutral-primary.
- Templates - Services: Removed second .content-modules container for Volet clientèles.


## [4.10.0] - 2020-04-29

### Added
- Templates: Tc Avis et alerte
- Components - List item: Small and medium variants.
- Components - Progress Bar: sm, md and lg Sizes.
- Patterns - Form: Progress Bar examples with input password.

### Changed
- Styles - Iconography: icon-color-{icon-name} and icon-color-{icon-name}-dark variants.
- Components - List item: handle list-item-icon-content left margin with styles instead of ml-5 class.
- Components - Progress Bar: Label and text. Update styles based on Design system.

### Fixed
- Components - Navigation: Fix hover border-radius for complexe navigation.
- Components - Nav tabs: Fix scrolling glitch on tabs < width 100%.
- Templates interne: slide-menu height now takes slide-menu-header into account to prevent scroll behavior.
- Templates: Fix right-margin for (PDF) automatic inclusion inside .btn component.


## [4.9.0] - 2020-04-07

### Added
- Templates: TC service

### Changed
- Updated: TC article
- Updated: TC nouvelle
- Updated: TC programme
- Updated: TC unité administrative
- Components - Messages: Adjustement font-size 16/24 for text.
- Components - Messages: Action buttons handling.
- Components - Maps: Update marker and popup examples.

### Removed
- Components - Messages: Remove unnecessary class after font-size normalisation.

### Fixed
- Content-header-extras-item now get 8px spacing between each elements.


## [4.8.0] - 2020-03-13

**icon-ticket (editorial) has been renamed icon-event to prevent conflict with utility icon-ticket.**

### Added
- SASS utilities: Responsive borders utilities classes.
- Maps (Cartography) integrations examples (Evenements).
- Sidebar: Allow for Sidebar Title classes.
- Iconography: position and social-flickr icons.
- Styles - Tables: Table complex examples with inputs, badges, buttons, etc.
- Styles - Tables: Utility class for small adaptative cell (.cell-sm).
- Components - List Group - Content: New Small mobile content stacking.
- Patterns - Header: Content header profile.
- Templates citoyens: Élus template.
- Templates citoyens: Événement templates (Minimum and maximum variants).
- Templates citoyens: Lieux templates (Minimum and maximum variants).

### Changed
- Changed and fixed some issues and normalisation of .list-item and .list-item-icon.
- Remove margin-top from sidebars on mobile
- Styles - Table: Color and margin for table caption.
- Styles - Table: Color of all TH's are now neutral-primary.
- Components - List Item: Allow some elements to be added inside list-item-content (links, bold, etc).
- Components - List Group: .list-group-item-infos default and .list-group-complex font size.

### Fixed
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

[4.20.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.20.0/
[4.19.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.19.0/
[4.18.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.18.0/
[4.17.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.17.0/
[4.16.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.16.0/
[4.15.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.15.0/
[4.14.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.14.1/
[4.14.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.14.0/
[4.13.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.13.0/
[4.12.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.12.0/
[4.11.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.11.1/
[4.11.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.11.0/
[4.10.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.10.0/
[4.9.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.9.0/
[4.8.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.8.0/
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
