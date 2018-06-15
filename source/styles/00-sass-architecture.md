
# VDM styleguide stylesheet architecture

## Variables and mixins

* variables
* * <small>All project variables</small>
* mixins
* * <small>Main mixin file used to import sub-mixins</small>


## Low-level dependencies

* reset
* * <small>Eric Meyer's base reset and more</small>
* print
* * <small>Basic print ruleset</small>
* icons
* * <small>Icons collection and variables that leverage the vdm-fonticon font & other iconic assets as needed.</small>


## Core CSS

* type
* * <small>This file contains element-level HTML binding and a few text transformation rules.</small>
* * <small>Font families, weights, sizes, line-heights and colors are defined in variables.sass.</small>
* colors
* * <small>This file contains thematic color schemes and element-level HTML color binding.</small>
* layout
* * <small>The main layout file that defines top level page structure.</small>
* regions
* * <small>Region specific structural rulesets.</small>
* grid
* * <small>Entry point to the grid system, consumables, top-level classes and mixins.</small>
* tables
* * <small>All things tables.</small>
* code
* * <small>Anything and everything that defines the presentation of code. Includes pre, code and specific utility classes.</small>
* forms-base
* * <small>All atomic level form components.</small>
* forms-advanced
* * <small>Higher level form layout strucres.</small>


## Components

* buttons
* menus
* tabs
* arrows
* notifications
* maps
* user-accounts
* themes
* pictograms
* switches-states
* search
* tags
* progress
* calendar
* navigation
* breadcrumbs
* pagination



## Applications

* action-lists-blocks
* categories-blocks
* collectors
* boroughs

# Utilities

* utilities
* accessibility
* responsive-utilities
