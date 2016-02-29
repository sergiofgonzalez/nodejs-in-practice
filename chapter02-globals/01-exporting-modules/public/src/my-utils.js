"use strict";

var exports = module.exports;

exports.sayHello = function (name) {
  return "Hello, " + name;
};

exports.sayHiAgain = function () {
  return "Hi there (again)";
};

function Wolf(type) {
  this.type = type;
}

Wolf.prototype.speak = function () {
  console.log("Hi, I'm a " + this.type + " wolf");
};

exports.Wolf = Wolf;
