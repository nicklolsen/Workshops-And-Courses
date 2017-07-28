/*

EXERCISE
Implement a width() function that gives you the width of the element

*/

function width(element) {

  var width = element.clientWidth;  // width + padding
  var paddingLeft = document.defaultView.getComputedStyle( element ).getPropertyValue('padding-left');
  var paddingRight = document.defaultView.getComputedStyle( element ).getPropertyValue('padding-right');
  return width - parseInt(paddingLeft) - parseInt(paddingRight);
}