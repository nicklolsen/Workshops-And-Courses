/*

EXERCISE
Write the new operator as if it was implemented in JS


Example Usage:

var Person = function(name) {
  this.name = name;
}

Person.prototype.speak = function() {
  console.log('Hello!');
}

var person = NEW( Person, ['name'] );

person.speak();

*/

function NEW( constructor, args ) {

  var obj = {};
  obj.__proto__ = constructor.prototype;
  constructor.apply( obj, args );
  return obj;

}





var Person = function(name) {
  this.name = name;
}

Person.prototype.speak = function() {
  console.log('Hello!');
}

var person = NEW( Person, ['name'] );

person.speak();