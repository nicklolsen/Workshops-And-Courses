/*

EXERCISE
Create jQuery's $.proxy() method

*/

// Take a function and return a new one that calls the original
// with a particular context
function proxy(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}





var dog = {
  name: 'fido',
  speak: function() {
    console.log( this.name + ' says woof' );
  }
};

var woofProxy = proxy(dog.speak, dog);
fidoProxy();  //-> 'fido says woof';





var cat = {
  name: 'whiskers'
};

var meowProxy = proxy(dog.speak, cat);
whiskersProxy();  //-> 'whiskers says woof';
