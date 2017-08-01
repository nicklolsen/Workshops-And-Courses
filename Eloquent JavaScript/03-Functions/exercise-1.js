"use strict";
/*

EXERCISE
Write a function min that takes two arguments and returns their minimum.

*/

(function(){

  function min(x, y) {
    return  x < y ? x : y;
  }

  console.log( min(3, 5) );
  console.log( min(0, -10) );

})();