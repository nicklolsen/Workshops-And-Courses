"use strict";
/*

EXERCISE

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the
input arrays.

*/

(function(){

  var arrays = [[1, 2, 3], [4, 5], [6]];
  var result = arrays.reduce( (flattenedArray, nextArray) => flattenedArray.concat(nextArray) );
  console.log( result ); // => [1, 2, 3, 4, 5, 6];

})();