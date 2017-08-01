"use strict";
/*

EXERCISE

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a data structure like the previous
one when given [1, 2, 3] as argument, and write a listToArray function that
produces an array from a list. Also write the helper functions prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list, or undefined when there is no
such element.

If you haven’t already, also write a recursive version of nth.

*/

(function(){

  function arrayToList( ary ) {

    var rootNode = {};
    var currentNode = rootNode;

    for (let i = 0; i < ary.length; i++) {
      currentNode.value = ary[i];
      currentNode.rest = {};
      currentNode = currentNode.rest;
    }

    return rootNode;
  }


  function listToArray( list ) {

    var currentNode = list;
    var ary = [];

    while( currentNode.rest ) {
      ary.push( currentNode.value );
      currentNode = currentNode.rest;
    }

    return ary;
  }


  function prepend( value, list ) {
    return {
      value: value,
      rest: list
    }
  }


  function nth( list, n ) {
    if (n < 0 || !list.rest)
      return;
    else if (n === 0)
      return list.value;
    else
      return nth( list.rest, n-1 );
  }


  console.dir(arrayToList([10, 20])); //=> {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30]))); // => [10, 20, 30]
  console.log(prepend(10, prepend(20, null))); // => {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1)); // => 20
})();