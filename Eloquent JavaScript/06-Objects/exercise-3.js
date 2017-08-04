"use strict";
/*

EXERCISE

Design an interface that abstracts iteration over a collection of values. An
object that provides this interface represents a sequence, and the interface
must somehow make it possible for code that uses such an object to iterate
over the sequence, looking at the element values it is made up of and having
some way to find out when the end of the sequence is reached.

When you have specified your interface, try to write a function logFive that
takes a sequence object and calls console.log on its first five elements—or
fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration
over the array using the interface you designed. Implement another object type
RangeSeq that iterates over a range of integers (taking from and to arguments
to its constructor) instead.

*/

(function(){

  /*
    Sequences should be iterable:
      - have an 'getElementAt( index )' method that returns the element at a given index
      - have a 'length' property that returns the number of elements in the sequence
   */

   function logFive( sequence ) {
    const times = Math.min(sequence.length, 5);
    for(let i = 0; i < times; i++) {
      console.log(sequence.getElementAt(i));
    }
   }


   function ArraySeq( array ) {
    this.elements = array;
   }

   ArraySeq.prototype.getElementAt = function( index ) {
    return this.elements[index];
   }

   Object.defineProperty(ArraySeq.prototype, 'length', {
    get: function() { return this.elements.length; }
   });


   function RangeSeq( from, to ) {
    this.from = from;
    this.to = to;
   }

   RangeSeq.prototype.getElementAt = function( index ) {
    if ( index < 0 || index > this.length ) return;

    return this.from + index;
   }

   Object.defineProperty(RangeSeq.prototype, 'length', {
    get: function() { return this.to - this.from; }
   });


   logFive(new ArraySeq([1, 2]));
   //=> 1
   //=> 2
   logFive(new RangeSeq(100, 1000));
   //=> 100
   //=> 101
   //=> 102
   //=> 103
   //=> 104
})();