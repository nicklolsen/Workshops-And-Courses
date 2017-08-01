"use strict";
/*

EXERCISE

Write a function, deepEqual, that takes two values and returns true only if
they are the same value or are objects with the same properties whose values
are also equal when compared with a recursive call to deepEqual.

*/

(function(){

  function deepEqual( x, y ) {

    // same object or same primtitive type with same value
    if (x === y) return true;


    // if the both args are objects and not null
    if ((x && typeof x === 'object') && (y && typeof y === 'object')) {

      let keysInX = 0;
      let keysInY = 0;

      for (let key in x)
        keysInX++;

      for (let key in y) {
        keysInY++;
        if (!key in x) return false;
        if (!deepEqual(x[key], y[key])) return false;
      }

      return keysInX === keysInY;

    } 

    return false;
  }



  var obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj)); //=> true
  console.log(deepEqual(obj, {here: 1, object: 2})); //=> false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //=> true
})();