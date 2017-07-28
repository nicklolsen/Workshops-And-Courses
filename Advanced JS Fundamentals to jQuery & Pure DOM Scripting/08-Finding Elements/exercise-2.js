/*

EXERCISE
Add an html method to get/set the innerHTML of an element(s). Should be
chainable


Example Usage: 

var dogs = new $('#breeds li');

dogs.html('<div>All Dogs</div>').html();

*/

function $( selector ) {
  var elements = document.querySelectorAll(selector);
  [].push.apply(this, elements);
  this.length = elements.length;
}

$.prototype.html = function( htmlString ) {
  
  // Could use the $.each function if we had it

  if ( arguments.length ) {

    for (var i = 0; i < this.length; i++) {
      this[i].innerHTML = htmlString;
    }

  } else {

    return this[0].innerHTML;

  }

  return this;
}





var dogs = new $('#breeds li');

dogs.html('<div>All Dogs</div>').html();