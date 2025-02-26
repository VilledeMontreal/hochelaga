// Migration from Gulp 3 to Gulp 4
// 2021-08

const { src, series, parallel, dest, watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const clean = require('gulp-clean');
const browsersync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const fs = require("fs");
const jsonConcat = require('gulp-json-concat');
const order = require("gulp-order");
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const exec = require('child_process').exec;
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const config = require('./build.config.json');
const package = require('./package.json');

// Browsersybnc Serve
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: config.root,
      routes: {
        "/boite-outils4": config.root
      }
    },
    ghostMode: false,
    open: "local"
  });
  cb();
}

// Browsersync reload
function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Clears the public folder file by file, leaving p.l. files intact
function cleanPublic() {
  return src( config.cleanable.files )
    .pipe(clean({force: true}));
}

// Clear distribution folder
function cleanDist() {
  return src( config.assets.distribution, { allowEmpty: true })
    .pipe(clean({force: true, read: false}));
}

// SASS: Copy
function sassCopy() {
  return src(config.scss.files)
    .pipe(dest(config.scss.distribution));
}

// SASS: Public
function css() {
  return src(config.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass( { includePaths: ['./node_modules'], quietDeps: true } ).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write(config.sourcemaps.dest))
    .pipe(dest(config.scss.dest));
}

// SASS: Distribution
function cssDist() {
  return src(config.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass( { includePaths: ['./node_modules'], quietDeps: true } ).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write(config.sourcemaps.dest))
    .pipe(dest(config.scss.distribution));
}

// Vendor scripts: public
function vendorScripts() {
  return src(config.nodemodulescripts.files)
    .pipe(dest(config.nodemodulescripts.dest));
}

// JS: public
function scripts() {
  return src(config.scripts.files)
    .pipe(dest(config.scripts.dest));
}

// JS: Distribution
function jsDist() {
  return src(config.scripts.files)
    .pipe(dest(config.scripts.distribution))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(dest(config.scripts.distribution));
}

// Images: public
function images() {
  return import('gulp-imagemin').then((gulpImagemin) => {
    src(config.images.files)
    .pipe(gulpImagemin.default([
      gulpImagemin.mozjpeg({ progressive: true }),
      gulpImagemin.optipng(),
      gulpImagemin.gifsicle(),
      gulpImagemin.svgo(),
    ]),
    )
    .pipe(dest(config.images.dest))
    .pipe(dest(config.imagesdist.dest))
  });
}

// Icons Sass folder
function iconsScss() {
  return src(config.iconescss.files)
    .pipe(dest(config.iconescss.dest));
}

// Concat and copy json in data folder for both utility and editorial icons
function iconsJson() {
  return src(config.iconesjson.files)
    .pipe(order([
      "vdm-icon-system/icons/editorial/icon-editorial.json",
      "vdm-icon-system/icons/utility/icon-utility.json"
    ], { base: 'source/' }))
    .pipe(jsonConcat('icons.json',function(data){
      return Buffer.from(JSON.stringify(data));
    }))
    .pipe(dest(config.iconesjson.dest));
};

// Photoswipe: copy
function photoswipe() {
  return src(config.photoswipe.files)
    .pipe(dest(config.photoswipe.dest));
}

// Glyphs: copy
function glyphs() {
  return src(config.glyphs.files)
    .pipe(dest(config.glyphs.dest));
}

// Fonts: copy
function fonts() {
  return src(config.fonts.files)
    .pipe(dest(config.fonts.dest));
}
// Fonts: Distribution
function fontsDist() {
  return src(config.fonts.files)
    .pipe(dest(config.fonts.distribution))
}

// Task: Handle Patternlab Sass
function plSass() {
  return src(config.patternlab.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass( { includePaths: ['./node_modules'], quietDeps: true } ).on('error', sass.logError))
    .pipe(postcss( [autoprefixer({})] ))
    .pipe(sourcemaps.write(config.sourcemaps.dest))
    .pipe(dest(config.patternlab.scss.dest));
}

// Task: styleguide
// Description: Copy Styleguide-Folder from core/ to public
function plStyleguide() {
  return src(config.patternlab.styleguide.files)
    .pipe(dest(config.patternlab.styleguide.dest));
}

// Task: patternlab
// Description: Build static Pattern Lab files via PHP script
// Type " $ php core/console --help --generate " to understand what is involved
function patternlab() {
  return exec('php core/console --generate --patternsonly --nocache');
}

// Task: Bao-version
// Get version from package.json and output a json the source directory
function baoVersion() {
  return src(config.bao.files.json)
    .pipe(dest(config.bao.dest));

}

// Watch
function watchTask() {
  // Watch Pattern Lab files
  watch(config.patternlab.files, series(patternlab, browsersyncReload));
  // Watch scripts
  watch(config.scripts.files, series(scripts, browsersyncReload));
  // Watch images
  watch(config.images.files, series(images, browsersyncReload));
  // Watch Sass
  watch(config.scss.files, series(css, browsersyncReload));
  // Watch Patternlab Sass
  watch(config.patternlab.scss.files, series(plSass, browsersyncReload));
  // Watch version update
  watch(config.bao.files.json, series(baoVersion, browsersyncReload));
}

// Task: Default
// Description: Clean all stale public files, build all componenents
// Typing 'gulp' or 'npm start' in the terminal will execute this task, it is the default

exports.default = series(
  cleanPublic,
  iconsScss,
  iconsJson,
  parallel(
    css,
    plSass,
    plStyleguide,
    images,
    vendorScripts,
    photoswipe,
    scripts,
    glyphs,
    fonts,
    baoVersion
  )
)

// Task: Serve
// Description: Clean all stale public files, build all componenents, serve and watch
exports.serve = series(
  iconsScss,
  iconsJson,
  patternlab,
  parallel(
    css,
    plSass,
    plStyleguide,
    images,
    vendorScripts,
    photoswipe,
    glyphs,
    fonts,
    scripts,
    baoVersion
  ),
  browsersyncServe,
  watchTask
)

// Task: Distribute
// Description: Build distribution package
exports.distribute = series(
  cleanDist,
  parallel(
    jsDist,
    images,
    cssDist,
    fontsDist
  ),
  sassCopy
)
