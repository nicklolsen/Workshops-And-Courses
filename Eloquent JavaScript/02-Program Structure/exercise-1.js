"use strict";
/*

EXERCISE
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

(function(){

  var str = '';

  for (let i = 0; i < 7; i++) {
    str += '#';
    console.log( str + '\n');
  }

})();


/* Better Approach */

(function(){

  for (let str = '#'; str.length <= 7; str += '#') {
    console.log(str);
  }

})();