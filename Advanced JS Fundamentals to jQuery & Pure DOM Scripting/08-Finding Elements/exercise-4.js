/*

  EXERCISE
  Remove the need to call 'new' when using our jQuery object


  Example Usage:

  var dogs = $('#breeds li');

  dogs.html('<div>Go To Heaven</div>').html();
  //-> '<div>Go To Heaven</div>'

*/

function $(selector) {

  if ( !(this instanceof $) ) {
    return new $(selector);
  }

  var elements = document.querySelectorAll(selector);
  this.length = elements.length;
  [].push.apply(this, elements);

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



var dogs = $('#breeds li');

dogs.html('<div>Go To Heaven</div>').html();
//-> '<div>Go To Heaven</div>'