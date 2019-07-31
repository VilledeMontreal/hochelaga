/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	inlineSvg = require("../");

describe("gulp-inline-svg", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/test.scss",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/test.scss")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/test.svg",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/test.svg")
		});

		var stream = inlineSvg();

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile.contents));
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it("should error on stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/test.svg",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/test.svg")
		});

		var stream = inlineSvg();

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});

});
