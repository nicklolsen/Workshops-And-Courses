/*

EXERCISE
Write the instanceof operator in JS


Example Usage:

var Person = function(name) {
  this.name = name;
}

var person = new Person('Alexis');
INSTANCEOF( person, Peson );

*/

function INSTANCEOF( obj, type ) {

  if ( !(obj.__proto__) ){ // we've reached the end of the chain
    return false;
  } else if ( obj.__proto__ === type.prototype ) {
    return true;
  } else {
    return INSTANCEOF( obj.__proto__, type );
  }

}





var Person = function(name) {
  this.name = name;
}

var person = new Person('Alexis');
console.log(INSTANCEOF( person, Person ));  // true
console.log(INSTANCEOF( person, String ));  // false
console.log(INSTANCEOF( person, Object ));