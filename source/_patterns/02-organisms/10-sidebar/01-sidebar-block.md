---
title: Sidebar block and variable content
---

A list of content blocks for the sidebar. A bunch of variants and thematic blocks are represented.


### Questions and issues

* There is a 96% width directive for all forms in sidebars. If this causes issues and overides are needed, sidebar forms will need classes.
* Responsibeve bahavious has to be implemented for the medium breakpoint, when the column narrows. Problems arise with right side icons, then. Have a look at teasers and cards for inspiration.

### Links

* Links are always black, in sidebars, to make them the primary color, add the .primary modifier class;
* The hover effect provides an underline, to differenciate from surrounding inline elements;
* Icons for links with icons are always the primary color


### Sections

* The base unit to space out content blocks vertically is a div.subsection. 
* Each subsection may have one or many subtitles (hx.subtitle)
* The subsection title inherits from the H5 styling.


### Color schemes 

There are 3 color schemes for child blocks inserted into sidebars, the add-on classes go on the parent .sidebar element.

* The base theme, on a light grey background, 
* The transparent theme with a fat black top stroke (.sidebar.theme-trans-top-stroke)
* The transparent theme with a light stroke and primary color accents (.sidebar.theme-border-primary)


### Forms

* Forms are inserted @ 96% width in sidebars, auto-centered.
* So are buttons without a form wrapper with the .vdm-btn-wide class.

### Titles

The title has modifier classes. The main sidebar title class is ".vdm-title", for the first title. 

* When it also has the .discrete class, there will be no bottom stroke and the bottom margin will be lighter.

### Lists

* Some modifier classes are available to control the bottom padding of list items (.p-small, .p-large,.p-larger)
* Bullet lists have the vdm-bullet-list class applied in order to show visible bullets;
