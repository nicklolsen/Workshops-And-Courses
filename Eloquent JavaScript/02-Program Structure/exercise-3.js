"use strict";
/*

EXERCISE
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8
and change the program so that it works for any size, outputting a grid of the
given width and height.

*/

(function(){

  const SIZE = 25;
  var str = '';

  for (let i = 0; i < SIZE; i++) {

    for (let j = 0; j < SIZE; j++) {

      if ( (j + i) % 2 === 0 ) {
        str += ' ';
      } else {
        str += '#';
      }

    }

    str += '\n';
  }


  console.log(str);
})();