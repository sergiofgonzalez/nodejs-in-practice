"use strict";

var CountStream = require("./countstream.js");

var countStream = new CountStream("book");
var http = require("http");

http.get("http://www.oreilly.com/", function (results) {
  results.pipe(countStream);
});

countStream.on("total", function (count) {
  console.log("Total matches:", count);
});
