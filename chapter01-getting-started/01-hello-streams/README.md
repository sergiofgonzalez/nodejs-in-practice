# Chapter 1: Getting started &mdash; 01-hello-streams
> a very intense first example of Node.js

## Description
The example illustrates how to count the words that match any one given in an http web page. In the example, a module that inherits from `Writable` is created. This specialization includes a matcher that emits a custom event `total` when the page has been read.
The event includes the number of times that the word used to instantiate this stream has been found.
```JavaScript
var countStream = new CountStream("word"); // will look for `word`
```

In the main program, `index.js`, an `http.get` call is used and streamed to `countStream` to count the hits of a given word. This is done by registering a callback on the `total` event provided by `countStream`:
```JavaScript
countStream.on("total", function (count) {
  console.log("Total matches:", count);
});
```
