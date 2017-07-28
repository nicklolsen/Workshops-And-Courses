/*

EXERCISE
Write your own implementation of jQuery's $.extend() method


Example Usage:

var target = {first: 'Justin'},
    object = {last: 'Meyer'};

var result = $.extend(target, object);

equal(result, target);
deepEqual(result, {first: 'Justin', last: 'Meyer'});

*/

var $ = (function(){

  var extend = function( target, object ) {

    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }

    return target;
  };


  return {
    extend: extend
  }

})();





var target = {first: 'Justin'},
    object = {last: 'Meyer'};

var result = $.extend(target, object);

console.log(result);
console.log(target);
console.log(result === target);