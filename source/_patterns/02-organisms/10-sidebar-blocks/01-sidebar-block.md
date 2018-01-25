---
title: Sidebar block and variable content
---

A list of content blocks for the sidebar. A bunch of variants and themeatic blocks are represented.

On the json side of things, there are a bunch of things to watchout for in terms of modifier classes.
Have a look at 01-base-page-portal.json of an idea.

### Questions and issues

* There is a 96% width directive for all forms in sidebars. If this causes issues and overides are needed, sidebar forms will need classes.
* Responsibeve bahavious has to be implemented for the medium breakpoint, when the column narrows. Problems arise with right side icons, then. Have a look at teasers and cards for inspiration.
* 

### Links

* Links are always black, in sidebars, to make them the brand color, add the .brand modifier class;
* The hover effect provides an undeline, that is it for a difference from surrounding inline elements;
* Icons for links with icons are always the brand color


### Sections

* The base unit to space out content blocks vertically is a div.subsection. 
* Each subsection may have one or many subtitles (hx.subtitle)
* The subsection title inherits from the H5 styling.


### Color schemes 

There are 3 color schemes for child blocks inserted into sidebars, the add-on classes go on the parent .sidebar element.

* The base theme, on a light grey background, 
* The transparent theme with a fat black top stroke (.sidebar.theme-trans-top-stroke)
* The transparent theme with a light stroke and bran color accents (.sidebar.theme-border-brand)


### Forms

* Forms are inserted @ 96% width in sidebars, auto-centered.
* So are buttons without a form wrapper with the .vdm-btn-wide class.

### Titles

The title has modifier classes. The main sidebar title class is ".vdm-title", for the first title. 

* When it also has the .discrete class, there will be no bottom stroke and the bottom margin will be lighter.

### Lists

* All lists are reset, inheriting from .vdm-list-plain automatically;
* Some modifier classes are available to control the bottom padding of list items (.p-small, .p-large,.p-larger)
* Bullet lists have have the vdm-bullet-list class applied in order to show visible bullets;
