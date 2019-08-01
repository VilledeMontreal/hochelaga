// Requires
var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    fc2json       = require('gulp-file-contents-to-json'),
    jsonTransform = require('gulp-json-transform'),
    inlineSvg     = require("gulp-inline-svg"),
    svgmin        = require('gulp-svgmin');


// UTILITY ICONS
// Config of the rendered files

gulp.task('icon-utility', function() {
  return gulp.src('icons/original/icon-utility/*.svg')
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
        { addClassesToSVGElement: { classNames: ["icon-svg"] } },
        { addAttributesToSVGElement: { attributes: ['role="icon"'] } },
        { removeDimensions: true },
        { removeAttrs: { attrs: ['(fill|fill-rule|style)'] } }
      ],
       js2svg: {
        pretty: true
      }
    })
  )
  .pipe(gulp.dest('icons/icon-utility/svgs-inline-use'))
  .pipe(inlineSvg({
      filename: 'icons/icon-utility/_icons-utility.scss',
      template: 'icons/original/tpl/scss-icons.mustache'
  }))
  .pipe(gulp.dest('./'));

});
  
gulp.task('jsonIconUtility', function() {

    gulp.src('icons/icon-utility/svgs-inline-use/*.svg')
        .pipe(fc2json('svg.json'))
        .pipe(jsonTransform(function(data) {
          var resultJson = '',
          objects = [],
          keys = Object.keys(data);

            for (var i = 0; i < keys.length; i++) {

                objects.push({
                    name: keys[i],
                    data: data[keys[i]]
                });
            }
            return objects; 
        }))
        .pipe(gulp.dest('icons/icon-utility/'));
});

///////////////////////////////////////////////////


gulp.task('icon-editorial', function() {
  return gulp.src('icons/original/icon-editorial/*.svg')
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
        { addClassesToSVGElement: { classNames: ["icon-svg"] } },
        { addAttributesToSVGElement: { attributes: ['role="icon"'] } },
        { removeDimensions: true },
        { removeAttrs: { attrs: ['(fill|fill-rule|style)'] } }
      ],
      js2svg: {
        pretty: true
      }
    })
  )
  .pipe(gulp.dest('icons/icon-editorial/svgs-inline-use'))
  .pipe(inlineSvg({
      filename: 'icons/icon-editorial/_icons-editorial.scss',
      template: 'icons/original/tpl/scss-icons.mustache'
  }))
  .pipe(gulp.dest('./'));

});

gulp.task('jsonIconEditorial', function() {
    gulp.src('icons/icon-editorial/svgs-inline-use/*.svg')
    .pipe(fc2json('svg.json'))
    .pipe(jsonTransform(function(data) {
          var resultJson = '',
          objects = [],
          keys = Object.keys(data);

            for (var i = 0; i < keys.length; i++) {

                objects.push({
                    name: keys[i],
                    data: data[keys[i]]
                });
            }
            return objects; 
        }))
    .pipe(gulp.dest('icons/icon-editorial/'));
});

gulp.task('default', ['icon-utility', 'icon-editorial', 'jsonIconUtility', 'jsonIconEditorial']);
