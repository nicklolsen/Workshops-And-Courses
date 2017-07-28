/*

!If you're going to run this code, make sure you import
04-Context/exercise-1.js before it!





EXERCISE 2
Write the dot [[call]] operator as if it were implemented in JS.


Example usage:

var Person = function(name) {
  this.name = name;
};

Person.prototype.speak = function(){
  console.log('Hello! ' + this.name);  
};
var person = new Person('Smith');

DOTCALL(person, 'speak', []);   // person.speak()

*/

function DOTCALL(obj, method, args) {
  
  var func = DOT(obj, method);

  if (func) {
    return func.apply(obj, args);
  }

}


// Test
var Person = function(name) {
  this.name = name;
};

Person.prototype.speak = function(){
  console.log('Hello! ' + this.name);  
};
var person = new Person('Smith');

DOTCALL(person, 'speak', []);   // person.speak()