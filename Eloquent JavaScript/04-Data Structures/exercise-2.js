"use strict";
/*

EXERCISE
Write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the
same elements in the inverse order. The second, reverseArrayInPlace, does what
the reverse method does: it modifies the array given as argument in order to
reverse its elements. Neither may use the standard reverse method.

*/

(function(){

  function reverseArray( ary ) {

    let newArray = [];

    for (let i = ary.length - 1; i >= 0; i--) {
      newArray.push( ary[i] );
    }
    
    return newArray;
  }


  function reverseArrayInPlace( ary ) {

    for (let i = 0; i < Math.floor(ary.length/2); i++) {
      let front = ary[i];
      let back = ary[ (ary.length - 1) - i ];

      ary[i] = back;
      ary[ (ary.length - 1) - i ] = front;
    }

    return ary;
  }

  console.log( reverseArray(["A", "B", "C"]) ); // => ["C", "B", "A"];

  console.log( reverseArrayInPlace(["A", "B", "C"]) );

  var arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue); // => [5, 4, 3, 2, 1]
})();