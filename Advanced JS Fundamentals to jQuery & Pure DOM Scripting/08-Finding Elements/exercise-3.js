/*

  EXERCISE
  Create a custom $().val() method


  Example Usage:

  <input type="text" value="some text" id="input">

  $('input').val();         //-> 'some text'
  $('input').('new text');

*/

function $(selector) {
  var elements = document.querySelectorAll(selector);
  [].push.apply(this, elements);
  this.length = elements.length;
}

$.prototype.val = function(value) {

  if (arguments.length) {
    // setter

    for (var i = 0; i < this.length; i++) {
      this[i].value = value;
    }

    return this;

  } else {
    // getter
    return this[0].value;
  }

}





var input = new $('#input');
console.log( input.val() );
console.log( input.val('new text') );
console.log( input.val() );



