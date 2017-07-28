/*

EXERCISE
Create a $().css() method;

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


$.prototype.css = function( property, value ) {

  if ( value ) {
    // setter

    for(var i = 0; i < this.length; i++) {
      this[i].style[ property ] = value;
    }
    
    return this;

  } else {
    // getter

    if (this[0].style[ property] === '') {
      return document.defaultView.getComputedStyle( this[0] ).getPropertyValue( value );
    } else {
      return this[0].style[ property ];
    }

  }

}




