// Source of this recipe :
// https://webdesign.tutsplus.com/tutorials/combining-pattern-lab-with-gulp-for-improved-workflow--cms-22187

// PLEASE SEE ALSO
// https://github.com/neoskop/patternlab-php && https://github.com/neoskop/patternlab-php/blob/master/gulpfile.js

var gulp                = require('gulp'),
    autoprefixer        = require('gulp-autoprefixer'),
    clean               = require('gulp-clean'),
    browserSync         = require('browser-sync'),
    cssmin              = require('gulp-cssmin'),
    fs                  = require("fs"),
    gulpif              = require('gulp-if'),
    gutil               = require('gulp-util'),
    imagemin            = require('gulp-imagemin'),
    jsonConcat          = require('gulp-json-concat'),
    order               = require("gulp-order"),
    postcss             = require('gulp-postcss'),
    rename              = require('gulp-rename'),
    sass                = require('gulp-sass'),
    shell               = require('gulp-shell'),
    sourcemaps          = require('gulp-sourcemaps'),
    tildeImporter       = require('node-sass-tilde-importer'),
    uglify              = require('gulp-uglify-es').default,
    config              = require('./build.config.json'),
    package             = require('./package.json');

// Trigger and switches
var production;
var distribution;

// Tasks: Clean output folders :before
// Description: Clear public folder
gulp.task('clean:before', function () {
    return gulp.src( config.assets.dest )
      .pipe(clean({
          force: true
      }))
});

// Description: clears the public folder file by file, leaving p.l. files intact
gulp.task('cleanable:before', function () {
  return gulp.src( config.cleanable.files )
    .pipe(clean({
        force: true
    }))
});

// Description: Clear distribution folder
gulp.task('clean-dist:before', function () {
  return gulp.src( config.assets.distribution )
    .pipe(clean({
      force: true
    }))
});

// JS files
// From node_modules to source -- stay up to date with curent versions
gulp.task('nodemodulescripts', function () {
  return gulp.src(config.nodemodulescripts.files)
      .pipe(gulp.dest(
        config.nodemodulescripts.dest
      ))
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('nodemodulescripts-dist', function () {
  return gulp.src(config.nodemodulescripts.files)
      .pipe(gulp.dest(
          config.nodemodulescripts.distribution
      ))
});

// Scripts from source to public
gulp.task('scripts', function () {
  return gulp.src(config.scripts.files)
    .pipe(
      gulpif(production, gulp.dest(config.scripts.distribution))
    )
    .pipe(
      gulpif(production, uglify())
    )
    .pipe(
      gulpif(production, rename({
        suffix: '.min'
      }))
    )
    .pipe(
      gulpif(!production, gulp.dest(config.scripts.dest))
    )
    .pipe(
      gulpif(production, gulp.dest(config.scripts.distribution))
    )
    .pipe(browserSync.reload({stream:true}));
});

// Scripts from source to distribution
gulp.task('scripts-dist', function () {
  return gulp.src(config.scripts.files)
    .pipe(
        uglify()
    )
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(
        rename({ suffix: '.min'})
    )
    .pipe(gulp.dest(
        config.scripts.distribution
    ));
});

// Photoswipe, copy
gulp.task('photoswipe', function () {
  return gulp.src(config.photoswipe.files)
    .pipe(gulp.dest(
      config.photoswipe.dest
    ))
});

// Images copy and minimize
gulp.task('images', function () {
    return gulp.src(config.images.files)
      .pipe(gulpif(production, imagemin()))
      .pipe(gulp.dest(
        config.images.dest
      ))
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('images-dist', function () {
  return gulp.src(config.imagesdist.files)
    .pipe(imagemin())
    .pipe(gulp.dest(
      config.imagesdist.dest
    ))
});

// Source sass files : copy to distribution folder
gulp.task('scss-dist', function () {
  return gulp.src(config.scss.files)
  .pipe(gulp.dest(
    config.scss.distribution
  ))
});

//Copy icons to scss folder
gulp.task('icons-scss', function() {
  return gulp.src(config.iconescss.files)
  .pipe(gulp.dest(config.iconescss.dest))
});

//Concat and copy json in data folder for both utility and editorial icons
gulp.task('icons-json', function() {
  return gulp.src(config.iconesjson.files)
    .pipe(order([
      "vdm-icon-system/icons/editorial/icon-editorial.json",
      "vdm-icon-system/icons/utility/icon-utility.json"
    ], { base: 'source/' }))
    .pipe(jsonConcat('icons.json',function(data){
      return Buffer.from(JSON.stringify(data));
    }))
    .pipe(gulp.dest(config.iconesjson.dest));
});



// Task: Handle Sass and CSS
gulp.task('sass', function () {
  var processors = [
      autoprefixer
  ];
  return gulp.src(config.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass( { importer: tildeImporter } ).on('error', sass.logError))
    .pipe(
      gulpif(production, cssmin())
    )
    .pipe(
      gulpif(production, rename({
        suffix: '.min'
      }))
    )
    .pipe(postcss( processors ))
    .pipe(sourcemaps.write(
      config.sourcemaps.dest
    ))
    .pipe(
      gulpif(!production, (gulp.dest(config.scss.dest)))
    )
    .pipe(
      gulpif(production, (gulp.dest(config.scss.distribution)))
    )
    .pipe(browserSync.reload({stream:true}));
});

// Task: Handle Sass and CSS
gulp.task('pl-sass', function () {
  var processors = [
      autoprefixer
  ];
  return gulp.src(config.patternlab.scss.files)
    .pipe(sourcemaps.init())
    .pipe(sass( { importer: tildeImporter } ).on('error', sass.logError))
    .pipe(postcss( processors ))
    .pipe(sourcemaps.write(
      config.sourcemaps.dest
    ))
    .pipe(gulp.dest(config.patternlab.scss.dest))
    .pipe(browserSync.reload({stream:true}));
});

// Task: patternlab
// Description: Build static Pattern Lab files via PHP script
// Type " $ php core/console --help --generate " to understand what is involved
gulp.task('patternlab', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'php core/console --generate --patternsonly --nocache'
    ]))
    .pipe(browserSync.reload({stream:true}));
});


// Task: styleguide
// Description: Copy Styleguide-Folder from core/ to public
gulp.task('styleguide', function() {
  return gulp.src(config.patternlab.styleguide.files)
    .pipe(gulp.dest(config.patternlab.styleguide.dest));
});

// Task: Bao-version
// Get version from package.json and output a json the source directory
gulp.task('bao-version', function() {

  var output = {
    "version"  : package.version
  };

  console.log(package.version);

  // Write the json icons file
  fs.writeFile(config.bao.files.json, JSON.stringify(output, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("The json bao version file has been created with version " + package.version);
  });

  return gulp.src(config.bao.files.json).pipe(gulp.dest(config.bao.dest)).pipe(browserSync.reload({stream:true}));

})


// task: BrowserSync
// Description: Run BrowserSync server with disabled ghost mode
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: config.root,
      routes: {
        "/boite-outils4": config.root
      }
    },
    ghostMode: false,
    open: "local"
  });
});


// Task: Watch
// Description: Watch all relevant files for changes
gulp.task('watch', function () {
  // Watch Pattern Lab files
  gulp.watch(
    config.patternlab.files,
    ['patternlab']
  );

  // Watch scripts
  gulp.watch(
    config.scripts.files,
    ['scripts']
  );

  // Watch images
  gulp.watch(
    config.images.files,
    ['images']
  );

  // Watch Sass
  gulp.watch(
    config.scss.files,
    ['sass']
  );

  // Watch Sass
  gulp.watch(
    config.patternlab.scss.files,
    ['pl-sass']
  );

});

// Task: Default
// Description: Clean all stale public files, build all componenents
// Typing 'gulp' or 'npm start' in the terminal will execute this task, it is the default
gulp.task('default', ['cleanable:before'], function () {
  production = false;
  gulp.start(
    'icons-scss',
    'icons-json',
    'patternlab',
    'styleguide',
    'sass',
    'pl-sass',
    'images',
    'nodemodulescripts',
    'photoswipe',
    'scripts'
  );
});

// Task: Serve
// Description: Clean all stale public files, build all componenents, serve and watch
gulp.task('serve', function () {
  production = false;
  gulp.start(
    'browsersync',
    'default',
    'watch',
    'bao-version'
  );
});


// Task: Distribute
// Description: Build all stuff of the project once
gulp.task('distribute', ['clean-dist:before'], function () {
  production = true;
  gulp.start(
    'nodemodulescripts-dist',
    'scripts',
    'images-dist',
    'sass',
    'scss-dist'
  );
});

