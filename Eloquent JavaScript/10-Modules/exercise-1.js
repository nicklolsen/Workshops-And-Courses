"use strict";

/*

EXERCISE

Write a simple module similar to the weekDay module that can convert month
numbers (zero-based, as in the Date type) to names and can convert names back
to numbers. Give it its own namespace since it will need an internal array of
month names, and use plain JavaScript, without any module loader system.

*/

const month = (function(){

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];

  function name( number ){
    if (!(number >= 0 || number < 12)) return;
    return months[number];
  }

  function number( name ){
    return months.indexOf(name);
  }

  return {
    name: name,
    number: number
  }
})();

console.log(month.name(2)); //=> March
console.log(month.number("November")); //=> 10