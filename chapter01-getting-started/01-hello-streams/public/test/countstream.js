"use strict";

var test = require("tape");
var Readable = require("stream").Readable;
var CountStream = require("../src/countstream.js");


test("0 should be found", function (t) {
  // Arrange
  var countStream = new CountStream("example");
  var stream = new Readable();

  // Act
  stream.push("no such word in this text.");
  stream.push(null);
  stream.pipe(countStream);
  countStream.on("total", function (count) {

    // Assert
    t.equal(0, count);
    t.end();
  });
});

test("1 should be found", function (t) {
  // Arrange
  var countStream = new CountStream("example");
  var stream = new Readable();

  // Act
  stream.push("one word found in this example text.");
  stream.push(null);
  stream.pipe(countStream);
  countStream.on("total", function (count) {

    // Assert
    t.equal(1, count);
    t.end();
  });
});
