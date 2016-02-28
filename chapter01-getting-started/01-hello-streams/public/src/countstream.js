"use strict";

var Writable = require("stream").Writable;
var util = require("util");
var log4js = require("log4js");
var logger = log4js.getLogger("CountStream");
logger.setLevel("INFO");


module.exports = CountStream;

// Make CountStream inherit from Writable stream
util.inherits(CountStream, Writable);

// Constructor for CountStream prototype object
function CountStream(matchText, options) {
  logger.debug("Initializing a new stream for regex `" + matchText + "` with options " + options);
  Writable.call(this, options);
  this.count = 0;
  this.matcher = new RegExp(matchText, "ig");
}

// overridden `_write` method for CountStream, search for and updates count of matches
CountStream.prototype._write = function (chunk, encoding, cb) {
  logger.debug("chunk:", chunk.toString());
  var matches = chunk.toString().match(this.matcher);
  if (matches) {
    this.count += matches.length;
  }
  cb();
};

// `end` method for CountStream, return total number of matches
CountStream.prototype.end = function() {
  logger.debug("end: ", this.count);
  this.emit("total", this.count); // Streams inherit from EventEmitter, so they feature `emit` and `on` methods
};
