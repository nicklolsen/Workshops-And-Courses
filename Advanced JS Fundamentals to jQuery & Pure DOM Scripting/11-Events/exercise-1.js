/*

EXERCISE
Create a $().bind() method

*/

function $(selector) {

  if ( !(this instanceof $) ) {
    return new $(selector);
  }


  var elements;

  if ( typeof selector === 'string' ) {
    elements = document.querySelectorAll(selector);
  } else {
    elements = selector;
  }


  [].push.apply(this, elements);
  this.length = elements.length;

}



$.prototype.bind = function( event, cb ) {

  for (var i = 0; i < this.length; i++) {
    this[i].addEventListener( event, cb, false );
  }

}

$.prototype.unbind = function( event, cb ) {

  for (var i = 0; i < this.length; i++) {
    this[i].removeEventListener( event, cb, false );
  }

}









