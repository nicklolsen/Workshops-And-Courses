/*

EXERCISE
Create a next() method


Example Usage:
$('#doberman').next();
$('#doberman').next().next();
$('#doberman').next().next().next();
$('#doberman, #beagles').next();

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

function $.prototype.next = function() {

  var accumulator = [];

  var current;

  for (var i = 0; i < this.length; i++) {
    
      current = this[i].nextSibling;

      while ( current && current.nodeType !== 1 ) {
        current = current.nextSibling;
      }

      if ( current ) {
        accumulator.push( current );
      }

  }

  return $(accumulator);
}