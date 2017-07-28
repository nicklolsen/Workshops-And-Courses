/*

EXERCISE
Implement jQuery's $.each() method

*/

var $ = (function(){ 


  function isArrayLike(arr) {

    var lengthIsNumber = typeof arr.length === 'number';
    var indexable = (arr.length - 1) in arr;
    var lengthIsZero = arr.length === 0;


    if ( lengthIsNumber ) {
      if ( indexable ) {
        return true;
      } else if ( lengthIsZero ) {
        return true;
      }
    }

    return false;  
  }





  function each(collection, callback) {

    var i, len, prop;


    if ( isArrayLike(collection) ) {

      for ( i = 0, len = collection.length; i < len; i++ ) {
        callback.call( collection[i], i, collection[i] );
      }

    } else {

      for ( prop in collection ) {
        if ( collection.hasOwnProperty(prop) ) {
          callback.call( collection[prop], prop, collection[prop] );
        }
      }

    }

  }


  return {
    isArrayLike: isArrayLike,
    each: each
  };

})();