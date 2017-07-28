var iframe = document.createElement('iframe');
document.body.appendChild(iframe);

var _Array = window.frames[window.frames.length-1].Array;

var arr = new _Array(1, 2, 3);


/*
Arrays from other frames can not be tested
in the conventional way
*/

typeof arr;  //-> 'object'
arr instanceof Array;   //-> false
arr.constructor === Array;  //-> false


/*
Therefore the only reliable way to test for an Array is to
call Object.prototype.toString method on an array, and test
for the string '[object Array]'
*/

var arr = [];
if (Object.prototype.toString.call(arr) === '[object Array]') {
  // .. we have an array
}