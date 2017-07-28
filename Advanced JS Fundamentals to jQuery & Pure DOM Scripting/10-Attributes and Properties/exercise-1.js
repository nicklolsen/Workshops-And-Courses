/*

EXERCISE
Create a $().attr() method

*/

function $( selector ) {

  if ( !(this instanceof $) ) {
    return new $(selector);
  }


  var elements;

  if ( typeof selector === 'string' ) {
    elements = document.querySelectorAll( selector );
  } else { // assume selector is an array
    elements = selector;
  }

  
  [].push.apply(this, elements);
  this.length = elements.length;

}

$.prototype.attr = function( attributeName, attributeValue ) {

  if ( attributeValue ) {
    // setter

    for(var i = 0; i < this.length; i++) {
      this[i].setAttribute( attributeName, attributeValue );
    }

    return this;

  } else {
    // getter
    return this[0] && this[0].getAttribute( attributeName );
  }

}