//----- DO NOT MODIFY ANY CODE BELOW THIS LINE -----
'use strict';

function printOne(callback) {
  setTimeout(function () {
    console.log('one');
    if (typeof callback == 'function') {
      return callback();
    }
  }, 500)
}

function printTwo(callback) {
  setTimeout(function () {
    console.log('two');
    if (typeof callback == 'function') {
      return callback();
    }
  }, 300)
}

function printThree(callback) {
  setTimeout(function () {
    console.log('three');
    if (typeof callback == 'function') {
      return callback();
    }
  }, 100)
}

function printFour(callback) {
  setTimeout(function () {
    console.log('four');
    if (typeof callback == 'function') {
      return callback();
    }
  }, 400)
}
//----- DO NOT MODIFY ANY CODE ABOVE THIS LINE -----

//@TODO
// 1. Print one, two, three and four in sequence using above async functions
//@CONSTRAINTS
// 1. No external libraries to be used

