/*

EXERCISE 1
Write the dot operator as if it were implemented in JS.


Example usage:

var Person = function(name) {
  this.name = name;
};
Person.prototype.isPerson = true;

var person = new Person('Smith');
DOT(person, 'name');    // person.name
DOT(person, 'isPerson'); // person.isPerson

*/

function DOT(obj, prop) {

  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else if (obj.__proto__) {
    return DOT(obj.__proto__, prop);
  }

  // implicitly return undefined if obj.__proto__ is undefined
}


// Test
var Person = function(name) {
  this.name = name;
};
Person.prototype.isPerson = true;

var person = new Person('Smith');

/*
console.log(DOT(person, 'name'));         // 'Smith'
console.log(DOT(person, 'isPerson'));     // true
console.log(DOT(person, 'toString'));     // function
console.log(DOT(person, 'ahaajahjkla'));  // undefined
*/