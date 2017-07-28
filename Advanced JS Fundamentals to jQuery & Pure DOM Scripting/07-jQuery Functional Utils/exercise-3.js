/*

EXERCISE
Implement isArrayLike()

*/

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