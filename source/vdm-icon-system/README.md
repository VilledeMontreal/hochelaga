
# vdm-icon-system

The svg icons availables for the projects of the city of Montreal.

## Getting Started

### Prerequisites

To run this application, you'll need  [Node.js](https://nodejs.org/fr/) (which comes with npm) and [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) installed on your computer.

### Installing

Run npm install to install all the dependencies.

```
 $ npm install
```

And after run gulp to generate svg optimized, json and sass file.

```
$ gulp
```

### Updating

To add or remove an icon from the library you have to:

1.  Place SVG icons into `src/` folder and in the folder name by the type of icon you want to replace.
Ex: `src/icon-editorial/ ` for category or editorials icons
2.  Run `gulp` to regenerate svg icons, .json and .scss

## Features
- [x] Generate clean svg icons for inline use
- [x] Generate scss data URI of the svg icons

### To-do list:
- [ ] Detach librairy from the BAO and transform it into a node module Ex: [Carbon icon library](https://github.com/carbon-design-system/carbon/tree/master/packages/icons)
- [ ] Generate a .json more cleaner for the definition of the svg icons
- [ ] Watch for some module upgrade (gulp-svgmin, gulp-json-transform, gulp-file-contents-to-json)
