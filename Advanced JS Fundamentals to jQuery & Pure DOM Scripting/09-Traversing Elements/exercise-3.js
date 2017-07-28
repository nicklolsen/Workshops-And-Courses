/*

EXERCISE
Add a private helper method makeTraverser()

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


$.prototype.makeTraverser = function(cb) {

  return function(){

    var accumulator = [], args = arguments;

    for (var i = 0; i < this.length; i++) {

      var ret = cb.apply( this[i], args );

      if ( Array.isArray( ret ) ) {
        [].push.apply( accumulator, ret );
      } else if ( ret ) {
        accumulator.push( ret );
      }

    }

    return $(accumulator);

  };

}