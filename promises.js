'use strict';
// P1
function printOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('one');
      return resolve();
    }, 500);
  });
}

function printTwo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('two');
      return resolve();
    }, 300);
  });
}

function printThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('three');
      return resolve();
    }, 100);
  });
}

function printFour() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('four');
      return resolve();
    }, 400);
  });
}
//----- DO NOT MODIFY ANY CODE ABOVE THIS LINE -----

//@TODO
// 1. Print one, two, three and four in sequence using above async functions
//@CONSTRAINTS
// 1. No external libraries to be used



// P2
// Write a function which rejects/resolves based on argument. (for eg. >10 ). Handle the error and print the error message.

