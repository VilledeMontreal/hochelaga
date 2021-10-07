// Migration from Gulp 3 to Gulp 4
// 2021-10

const { src, series, parallel, dest } = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const fc2json = require('gulp-file-contents-to-json');
const jsonTransform = require('gulp-json-transform');
const inlineSvg = require("gulp-inline-svg");
const svgmin = require('gulp-svgmin');


// Clean output folders before generating svgs
function cleanIcons() {
  return del(['icons/**', '!icons'], {force:true});
}

// UTILITY ICONS
function iconUtility() {
  return src('src/icon-utility/*.svg')
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/icon_prefix_/, '');
      return path;
    }))
    .pipe(svgmin({
        plugins: [
          { cleanupAttrs: { newlines: false, trim: false, spaces: false } },
          { cleanupIDs: { remove: false, minify: false } },
          { removeXMLNS: false },
          { removeDoctype: true },
          { removeComments: true },
          { removeStyleElement: true },
          { removeEditorsNSData: true },
          { removeViewBox: false },
          { removeTitle: true },
          { cleanupNumericValues: { floatPrecision: 2  } },
          { addAttributesToSVGElement: { attributes: ['role="icon"'] } },
          { removeDimensions: true },
          { removeAttrs: { attrs: ['(fill|style)'] } }
        ],
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(dest('icons/utility/svgs-inline-use'))
    .pipe(inlineSvg({
        filename: 'icons/utility/_icons-utility.scss',
        template: 'src/templates/scss-icons.mustache'
    }))
    .pipe(dest('./'));
}

// EDITORIALS ICONS
function iconEditorial() {
  return src('src/icon-editorial/*.svg')
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/icon_prefix_/, '');
      return path;
    }))
    .pipe(svgmin({
        plugins: [
          { cleanupAttrs: { newlines: false, trim: false, spaces: false } },
          { cleanupIDs: { remove: true, minify: true } },
          { removeXMLNS: false },
          { removeDoctype: true },
          { removeComments: true },
          { removeStyleElement: true },
          { removeEditorsNSData: true },
          { removeViewBox: false },
          { removeTitle: false },
          { cleanupNumericValues: { floatPrecision: 2  } },
          { addAttributesToSVGElement: { attributes: ['role="icon"'] } },
          { removeDimensions: true },
          { removeAttrs: { attrs: ['(fill|style)'] } }
        ],
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(dest('icons/editorial/svgs-inline-use'))
    .pipe(inlineSvg({
        filename: 'icons/editorial/_icons-editorial.scss',
        template: 'src/templates/scss-icons.mustache'
    }))
    .pipe(dest('./'));
}

// utility icon json from directory
function jsonIconUtility() {
  return src('icons/utility/svgs-inline-use/*')
    .pipe(fc2json('icon-utility.json', {
      extname: false,
      flat: true
    }))
    .pipe(jsonTransform(function(data) {
      let objects = [];
      const keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        objects.push({
          name: keys[i],
          data: data[keys[i]],
        });
      }
      return objects;
    }))
    .pipe(dest('icons/utility'));
}

// editorial icon json from directory
function jsonIconEditorial() {
  return src('icons/editorial/svgs-inline-use/*.svg')
    .pipe(fc2json('icon-editorial.json', {
      extname: false,
      flat: true
    }))
    .pipe(jsonTransform(function(data) {
      let objects = [];
      const keys = Object.keys(data);
      for (let i = 0; i < keys.length; i++) {
        objects.push({
          name: keys[i],
          data: data[keys[i]],
        });
      }
      return objects;
    }))
    .pipe(dest('icons/editorial/'));
}

// Task: Default
// Description: Clean all stale public files, build all componenents
exports.default = series(
  cleanIcons,
  parallel(
    series(
      iconUtility,
      jsonIconUtility
    ),
    series(
      iconEditorial,
      jsonIconEditorial
    )
  )
)
