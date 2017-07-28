/*

EXERCISE
Build a tag library that creates elements of the following types in the least
lines of code: a, div, span, form, h1, h2, h3, h4


Example usage:

var h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

var a = make.a();
a.href = 'http://canjs.us';
a.innerHTML = 'CanJS';
document.body.appendChild(a);

*/

var make = (function(){

var tags = [ 'a', 'div', 'span', 'form', 'h1', 'h2', 'h3', 'h4' ];
var make = {};

var i, len, tag;


for (i = 0, len = tags.length; i < len; i++) {

  tag = tags[i];

  make[tag] = (function(tag){   // closure to save the state of 'tag'
    return function() {
      return document.createElement(tag);
    };
  })(tag);

}


return make;

})();





var h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

var h2 = make.h2();
h2.innerHTML = 'Hello World';
document.body.appendChild(h2);

var h3 = make.h3();
h3.innerHTML = 'Hello World';
document.body.appendChild(h3);

var h4 = make.h4();
h4.innerHTML = 'Hello World';
document.body.appendChild(h4);

var a = make.a();
a.href = 'http://canjs.us';
a.innerHTML = 'CanJS';
document.body.appendChild(a);

var div = make.div();
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'tomato';
document.body.appendChild(div);

var span = make.span();
span.innerHTML = 'This is a span!';
document.body.appendChild(span);

var form = make.form();
document.body.appendChild(form);
