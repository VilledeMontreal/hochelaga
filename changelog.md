# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.1.0] - unreleased

## Added
- Cookies Consent templates: Patterns/Cookies Consent
- Add the path to icon scss and json to build.config.json
- Added the gallery module, a custom skin placed in the images folder and the css build into the bao with the gallery.scss file
- Menu items (horizontal and vertical variant)
- 12 new utility icons.
- Template employé - Vue de l'agent 311
- Accordions listed and framed examples
- .unfixed utility class to unfix an element that uses the class fixed-DIRECTION.

## Changed
- Changing the layout of employes for the user to be logged on.
- Change Slide-menu-interne to use the menu-items component.
- PL: inputs are now reusable.
- Rules for automated external links and (PDF) mention is more restrictive (added some exclusion - list-group, list, link with icon). 
- PL: removed all back links and badges from templates - waiting for more infos.

## Fixed
- Update the gulpfile to generate the correct scss of the icons
- Change the method to display the validation icon. Modify the form.scss and adding markup for displaying the icon on validation.
- Modal footer buttons alignment.


## [4.0.1] - 2019-08-27

## Added
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

## Changed
- Blockquote emphasis should be a div tag (blockquote is strickly for citation).
- .sb-block now takes 4rem margin-bottom by default.
- Cards fw now depends on grid-class for formatting at some breakpoint.
- Cards fw now takes a minimal height for image (~16:9 aspect ratio) @larger breakpoint.
- Deleting employes and citizens separation in editorial icons 

## Fixed
- List Group line-heights, paddings and margins.
- Prevent media copyright icon from being squashed when long copyright.
- Pattern Labs: Fixed various pseudo-templates inclusion.

## Removed
- Removed some cards classes (.card-sm, .card-guide, .card-events, .card-news) that introduces exception. (Cards harmonisation)


## [4.0.0] - 2019-08-15

This is the first release of BAO implementing the new design system. Many things have changed. Validate all your components and template when upgrading from previous version.

Main navbar, menu and footer are now in their own stylesheet. They will eventually be taken out of the BAO and into the shell itself. Until then, you can use styles-header-footer-v4 to include these styles in your project.

## Changed
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

## Deprecated
- vdm-font-icon.
- All old templates.
- Lots of molecules and organisms.


## Version 3 and earlier

The version 3 is now deprecated. Only bug fixes will be considered. Please refer to the old bitbucket repo https://bitbucket.org/villemontreal/boite-outils-web/.



[4.0.1]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.0.1/
[4.0.0]: https://bitbucket.org/villemontreal/boite-outils4-web/src/4.0.0/
