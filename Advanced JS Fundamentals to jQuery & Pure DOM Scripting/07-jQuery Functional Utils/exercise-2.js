/*

EXERCISE
Write your own implementation of jQuery's $.isArray() method

*/

var $ = (function(){

  var isArray = function(arr) {
    return (Object.prototype.toString.call(arr) === '[object Array]');
  };


  return {
    isArray: isArray
  };

})();





// Test
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);

var _Array = iframe.contentWindow.Array;

console.log($.isArray(new _Array())); //-> true;