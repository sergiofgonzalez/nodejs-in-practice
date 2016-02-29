"use strict";

function MyGreeterClass() {
}

MyGreeterClass.prototype = {
  greeting: function () {
    return "Hello, world!";
  }
};

MyGreeterClass.prototype.goodbye = function (name) {
  return "farewell, " + name;
};

var myGreeter = new MyGreeterClass();

module.exports = myGreeter;
