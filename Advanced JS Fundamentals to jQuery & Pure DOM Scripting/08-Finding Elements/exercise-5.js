/*

  EXERCISE
  Add a text() method to get/set the text of an element


  Example Usage:

  $('ul').text();
  //-> '
  //->  Doberman
  //->  Beagles
  //->  Boxer
  //-> '
  $('ul li:first-chid').text('TEETH').text() //-> 'TEETH!'


  hint:
    To set, clear html and append document.createTextNode( text ); to escape html tags
    To get, recurse through each child if child.nodeType === 3, read and accumulate child.nodeValue
*/

function $(selector) {

  if ( !(this instanceof $) ) {
    return new $(selector);
  }

  var elements = document.querySelectorAll(selector);
  [].push.apply(this, elements);
  this.length = elements.length;
}

$.prototype.text = function(newText) {

  if(arguments.length) {
    // setter

    var textNode;

    for (var i = 0; i < this.length; i++) {
      textNode = document.createTextNode(newText);
      this[i].innerHTML = '';
      this[i].appendChild( textNode );
    }

    return this;

  } else {
    // getter
    return this[0] && getText(this[0]);
  }

};

function getText(element) {

  var txt = "",
      childNodes = element.childNodes;


  for (var i = 0; i < childNodes.length; i++) {
    if ( childNodes[i].nodeType === 3 ) { // if its a text node
      txt += childNodes[i].nodeValue;
    } else if ( childNodes[i].nodeType === 1 ) { // if its an element node
      txt += getText( childNodes[i] );
    }

  }

  return txt;
}





console.log($('#list').text());
  //-> '
  //->  Doberman
  //->  Beagles
  //->  Boxer
  //-> '
console.log($('ul li:first-child').text('TEETH').text()); //-> 'TEETH!'

