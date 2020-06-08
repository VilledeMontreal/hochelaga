// Requires
var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    fc2json       = require('gulp-file-contents-to-json'),
    jsonTransform = require('gulp-json-transform'),
    inlineSvg     = require("gulp-inline-svg"),
    svgmin        = require('gulp-svgmin'),
    del           = require('del');

// Tasks: Clean output folders before generating svgs
gulp.task('clean', function () {
  return del(['icons/**', '!icons'], {force:true});
});


// UTILITY ICONS
gulp.task('icon-utility', function() {
  return gulp.src('src/icon-utility/*.svg')
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
  .pipe(gulp.dest('icons/utility/svgs-inline-use'))
  .pipe(inlineSvg({
      filename: 'icons/utility/_icons-utility.scss',
      template: 'src/templates/scss-icons.mustache'
  }))
  .pipe(gulp.dest('./'));

});

gulp.task('jsonIconUtility', ['icon-utility'], function () {
    gulp.src('icons/utility/svgs-inline-use/*.svg')
    .pipe(fc2json('icon-utility.json'))
    .pipe(jsonTransform(function(data) {
          var resultJson = '',
          objects = [],
          keys = Object.keys(data);

            for (var i = 0; i < keys.length; i++) {

                objects.push({
                    name: keys[i].replace('.svg', ''),
                    data: data[keys[i]]
                });
            }
            return objects; 
        }))
    .pipe(gulp.dest('icons/utility'));
});


// EDITORIALS ICONS
gulp.task('icon-editorial', function() {
  return gulp.src('src/icon-editorial/*.svg')
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
  .pipe(gulp.dest('icons/editorial/svgs-inline-use'))
  .pipe(inlineSvg({
      filename: 'icons/editorial/_icons-editorial.scss',
      template: 'src/templates/scss-icons.mustache'
  }))
  .pipe(gulp.dest('./'));

});

gulp.task('jsonIconEditorial', ['icon-editorial'], function () {
    gulp.src('icons/editorial/svgs-inline-use/*.svg')
    .pipe(fc2json('icon-editorial.json'))
    .pipe(jsonTransform(function(data) {
          var resultJson = '',
          objects = [],
          keys = Object.keys(data);
            for (var i = 0; i < keys.length; i++) {
                objects.push({
                    name: keys[i].replace('.svg', ''),
                    data: data[keys[i]],
                });
            }
            return objects; 
        }))
    .pipe(gulp.dest('icons/editorial/'));
});



// Task: Default
// Description: Clean all stale public files, build all componenents
gulp.task('default', ['clean'], function () {
  production = false;
  gulp.start(
    'jsonIconUtility',
    'jsonIconEditorial'
  );
});

