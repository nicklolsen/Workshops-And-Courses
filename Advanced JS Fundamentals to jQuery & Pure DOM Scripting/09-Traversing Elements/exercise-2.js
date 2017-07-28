/*

EXERCISE
Create a parent() method

*/

function $(selector) {

  if ( !(this instanceof $) ) {
    return new $(selector);
  }


  var elements;

  if ( typeof selector === 'string' ) {
    elements = document.querySelectorAll( selector );
  } else { // assume its an array 
    elements = selector;
  }

  [].push.apply(this, elements);
  this.length = elements.length;

}


$.prototype.parent = function() {

  var accumulator = [];
  var element;

  for(var i = 0; i < this.length; i++) {

    element = this[i];
    accumulator.push(element.parentNode);

  }

  return $(accumulator);

}