/*

EXERCISE
Add a 'find()' method that returns items within the current elements


Example Usage:
var dogImages = $('div').find('img');

*/


function $(selector) {

  var elements;

  if ( typeof selector === 'string' ) {
    elements = document.querySelectorAll(selector);
  } else { // assume its an array
    elements = selector;
  } 
  

  [].push.apply(this, elements);
  this.length = elements.length;

}


$.prototype.find = function(selector) {

  var arr = [];
  var elements;

  for (var i = 0; i < this.length; i++) {
    elements = this[i].querySelectorAll( selector );
    [].apply.push(arr, elements);
  }

  return $(arr);
}

















