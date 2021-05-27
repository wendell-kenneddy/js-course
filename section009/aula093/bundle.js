"use strict";

var printResult = function printResult(result) {
  return console.log(result);
};

fetch('./data.json').then(function (response) {
  return response.json();
}).then(function (json) {
  return printResult(json);
})["catch"](function (err) {
  return console.log(err);
});
