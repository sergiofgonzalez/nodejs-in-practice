"use strict";

var myGreeter = require("./my-greeter.js");

/* `my-greeter` exports an instance of MyGreeter class */
console.log(myGreeter.greeting());
console.log(myGreeter.goodbye("my friend"));

console.log("===============================");

var Rabbit = require("./rabbit.js");

/* `rabbit` exports the Rabbit class */
var whiteRabbit = new Rabbit("white");
whiteRabbit.speak();

console.log("===============================");

/* `my-utils` exports several functions and objects */
var myUtils = require("./my-utils.js");
console.log(myUtils.sayHello("you"));
console.log(myUtils.sayHiAgain());

var WolfFactory = myUtils.Wolf;
var bigBadWolf = new WolfFactory("big bad");
bigBadWolf.speak();

console.log("===============================");
