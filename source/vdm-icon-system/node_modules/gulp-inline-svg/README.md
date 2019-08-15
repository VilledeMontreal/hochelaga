# gulp-inline-svg
> inline-svg plugin for [gulp](https://github.com/wearefractal/gulp)

This plugin takes a couple of SVG files and provides them inside a Sass mixin as inlined background-images. By doing so, you can use them without having to touch your markup.

## Compatibility
The inlined SVG gets URL encoded, so it's safe to use starting with IE9.

## Important notes
The generated mixin contains width and height values for each SVG. Those values are taken from the width and height attribute inside the SVG. If it does not provide them, they will be set to 0px. You can still overwrite them in your CSS.

## Usage

First, install `gulp-inline-svg` as a development dependency:

```shell
npm install --save-dev gulp-inline-svg
```

Then, add it to your `gulpfile.js`. I'd recommend to use it in conjunction with [gulp-svgmin](https://www.npmjs.com/package/gulp-svgmin) to clean the SVG before inlining them.

```javascript
var inlineSvg = require("gulp-inline-svg"),
	svgMin = require('gulp-svgmin');

gulp.task('inline-svg', function() {
	return gulp.src("images/svgs/**/*.svg")
		.pipe(svgMin())
		.pipe(inlineSvg())
		.pipe(gulp.dest("sass"));
});
```

This will create a _svg.scss file inside your 'sass' folder.

### Usage inside you Sass code
The _svg.scss file will provide you with the following mixins and functions:

#### inline-svg mixin

```scss
.my-icon {
	// will set the svg as background-image and width/height
	@include inline-svg($icon-name);
}
```

#### inline-svg-width function

```scss
.my-icon {
	margin-left: inline-svg-width($icon-name);
}
```

#### inline-svg-height function

```scss
.my-icon {
	margin-bottom: inline-svg-height($icon-name);
}
```

## Configuration
If you want to customize the default configuration, you can pass an options object to the task function:

```javascript
gulp.src("images/svgs/**/*.svg")
	.pipe(svgMin())
	.pipe(inlineSvg({
		filename: '_svg-file.scss',
		template: 'mytemplate.mustache'
	}))
	.pipe(gulp.dest("sass"));
```

### filename
Specifies the name of the generated file.

### template
The plugin will generate an .scss-file by default, but you can easily adopt this for other languages, by using your own template. With this option, you can specify the path to a [mustache](https://github.com/janl/mustache.js/) template.

You can use the default template as a blueprint to create your own. And please don't hesitate to [share](http://gitlab.sgalinski.de/toolchain/gulp-inline-svg/fork/new) your template if you create one for an additional language.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
