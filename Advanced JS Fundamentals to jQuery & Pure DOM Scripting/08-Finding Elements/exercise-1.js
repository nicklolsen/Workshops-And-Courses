/*

EXERCISE
Create a function named '$' that takes a selector as an argument, selects from
the DOM, and returns an array-like object:


Example Usage:

var breeds = new $('#breeds');

breeds.length //-> 1;
breeds[0]     //-> $[ ul#breeds ]

*/

function $(selector) {

  var elements = document.querySelectorAll(selector);

  [].push.apply(this, elements);
  this.length = elements.length;

}





var breeds = new $('#breeds li');

console.log(breeds.length); //-> 1;
console.log(breeds[0]);     //-> $[ ul#breeds ]