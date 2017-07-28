/*

  "If it looks like a duck, walks like a duck and quacks like a duck..."

  DUCK TYPING
  Duck typing is concerned with those properties that are used on the object
  rather than the type of object itself

  An object that is an Array has the following characteristics:
  arguments.length;
  arguments[0];

*/


console.log(isArrayLike(['a', 'b', 'c']));  //-> true

(function(){
  console.log( isArrayLike( arguments ) );  //-> true
})();

var divs = document.getElementsByTagName('div');
console.log( isArrayLike( divs ) ); //-> true
