---
title: Fonticons
---

Displays an index of the content of the npm @villemontreal/font-icon project.

## Usage

Markup should be as simple as this : 

```<span class="vdm vdm-001-rosace aria-hidden="true"></span>```

Best practices recommands inline usage as much as possible, where explicit makup is used to generate the icon.

In a few cases, where the content CSS attribute is animated by user interactivity, the mixin may be used.

Example: 
```@include iconvdm(before, '001-rosace'); ```

## Background

The gulpfile is curently responsible for copying the font assets from the node module. Is is also responsible for parsing the javascript file and creating a sass map variable in the ```./css/scss/vdm-icons-map.sass``` file.