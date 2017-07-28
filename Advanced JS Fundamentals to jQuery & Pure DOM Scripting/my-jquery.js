/*

  This is a jquery clone created as an exercise for the course.

  I was trying to keep each method seperated but while creating the individual
  methods for each exercise is nice for notes, a full implementation makes more
  sense as an exercise. I don't want to have to recreate old exercises.

*/

(function() {
  $ = function(selector) {

    if ( !(this instanceof $) ) {
      return new $(selector);
    }


    var elements;
    
    if ( typeof selector === 'string' ) {
      elements = document.querySelectorAll(selector);
    } else { // assume its an array
      elements = selector;
    }

    [].push.apply(this, elements);
    this.length = elements.length;
  };

  $.extend = function(target, object) {

    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        target[prop] = object[prop];
      }
    }

    return target;

  };

  // Static methods
  var isArrayLike = function(obj) {

    var lengthIsNumber = (typeof obj.length === 'number');
    var indexable = (obj.length - 1) in obj;
    var lengthIsZero = obj.length === 0;


    if ( lengthIsNumber ) {
      if ( indexable ) {
        return true;
      } else if ( lengthIsZero ) {
        return true;
      }
    }

    return false;  

  };

  var makeTraverser = function(cb) {

    return function(){

      var accumulator = [], args = arguments;

      $.each(this, function(index, element) {
        var ret = cb.apply(element, args)

        if ( ret && isArrayLike( ret ) ) {
          [].push.apply( accumulator, ret );
        } else if ( ret ) {
          accumulator.push( ret );
        }

      });

      return $(accumulator);

    };

  };


  $.extend($, {
    isArray: function(obj) {

      return (Object.prototype.toString.call(obj) === '[object Array]');

    },
    each: function(collection, cb) {

      var i, len, prop;


      if ( isArrayLike(collection) ) {

        for ( i = 0, len = collection.length; i < len; i++ ) {
          cb.call( collection[i], i, collection[i] );
        }

        return collection;

      } else {

        for ( prop in collection ) {
          if ( collection.hasOwnProperty(prop) ) {
            cb.call( collection[prop], prop, collection[prop] );
          }
        }

        return collection;

      }

    },
    makeArray: function(arr) {
      return Array.prototype.slice.call(arr);
    },
    proxy: function(fn, context) {
      return function() {
        return fn.apply(context, arguments);
      };
    }
  });

  $.extend($.prototype, {
    html: function(newHtml) {
      
      if (arguments.length) {
        
        $.each(this, function(index, element) {
          element.innerHTML = newHtml;
        });

        return this;

      } else {
        return this[0].innerHTML;
      }

    },
    val: function(newVal) {

      if (arguments.length) {

        $.each( this, function(index, element) {
          element.value = newVal;
        } );

        return this;
      } else {
        return this[0].value;
      }

    },
    text: function(newText) {

      if ( arguments.length ) {
        // setter

        $.each(this, function(index, element){

          var txt = document.createTextNode( newText );
          element.innerHTML = '';
          element.appendChild(txt);

        });

        return this;

      } else {
        // getter
        return this[0] && getText( this[0] );
      }


      function getText(element){

        var txt = '',
            childNodes = element.childNodes;


        $.each(childNodes, function(index, node){

          if ( node.nodeType === 3 ) { // text node
            txt += node.nodeValue;
          } else if ( node.nodeType === 1 ) { // element node
            txt += getText( node );
          }

        });

        return txt;
      }

    },
    find: function(selector) {

      var accumulator = [];

      $.each(this, function(index, element){
        var elements = element.querySelectorAll(selector);
        [].push.apply(accumulator, elements);
      });

      return $(accumulator);
    },
    next: makeTraverser(function() {
      var current = this.nextSibling;

      while( current && current.nodeType !== 1) {
        current = current.nextSibling;
      }

      if ( current ) {
        return current;
      }

    }),
    prev: makeTraverser(function() {
      var current = this.previousSibling;

      while( current && current.nodeType !== 1) {
        current = current.previousSibling;
      }

      if ( current ) {
        return current;
      }

    }),
    parent: makeTraverser(function(){
      return this.parentNode;
    }),
    children: makeTraverser( function() {
      return this.children;
    } ),
    attr: function(attrName, value) {

      if ( value ) {
        // setter

        $.each( this, function(index, element) {
          element.setAttribute( attrName, value );
        } );

        return this;

      } else {
        // getter
        return this[0] && this[0].getAttribute( attrName );
      }

    },
    css: function(cssPropName, value) {

      if ( arguments.length > 1 ) {
        // setter

        return $.each(this, function(index, element) {
          element.style[ cssPropName ] = value;
        } );

      } else {
        // getter
        return this[0] && 
                document.defaultView.getComputedStyle( this[0] ).
                getPropertyValue( cssPropName );
      }

    },
    width: function() {

      var clientWidth = this[0].clientWidth;
      var paddingLeft = this.css('padding-left'),
          paddingRight = this.css('padding-right');

      return clientWidth - parseInt(paddingLeft) - parseInt(paddingRight);

    },
    offset: function() {
      var offset = this[0].getBoundingClientRect();
      return {
        top: offset.top + window.pageYOffset,
        left: offset.left + window.pageXOffset
      };
    },
    hide: function() {
      this.css('display', 'none');
    },
    show: function() {
      this.css('display', '');
    },

    // Events
    bind: function(eventName, handler) {},
    unbind: function(eventName, handler) {},
    has: function(selector) {
      var elements = [];
  
      $.each(this, function(i, el) {
        if(el.matches(selector)) {
          elements.push(el);
        }
      });
    
      return $( elements );
    },
    on: function(eventType, selector, handler) {
      return this.bind(eventType, function(ev){
        var cur = ev.target;
        do {
          if ($([ cur ]).has(selector).length) {
            handler.call(cur, ev);
          }
          cur = cur.parentNode;
        } while (cur && cur !== ev.currentTarget);
      });
    },
    off: function(eventType, selector, handler) {},
    data: function(propName, data) {},

    // Extra
    addClass: function(className) {},
    removeClass: function(className) {},
    append: function(element) {}
  });

  $.buildFragment = function(html) {};
})();