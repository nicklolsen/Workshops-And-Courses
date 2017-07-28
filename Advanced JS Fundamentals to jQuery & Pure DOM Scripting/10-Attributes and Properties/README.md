# Getting and Setting Attributes

## Attributes

* element.getAttribute( attributeName )
* element.setAttribute( attributeName, value )
* element.removeAttribute( attributeName )

* element.id
* element.className
* anchor.href
* input.type


## CSS
The properties in element.style are all cleared - it exists only for you to write to it. In order to get to the actual styles of an element, you need to use document.defaultView.getComputedStyle( element ).getPropertyValue( value ).

```html
<li>
  <a href="#Doberman">Doberman</a>
</li>
```

```css
li {
  display: inline-block
}
```

```javascript
var doberman = $('li')[0];
doberman.style.display    //-> ''
document.defaultView.getComputedStyle(doberman).getPropertyValue('display') //-> 'inline-block'
```

## DOM Layout and Positioning

* element.offsetParent - nearest offset parent
* element.offsetTop - distance from the nearest offset parent
* element.offsetLeft - distance from the nearest offset parent
* element.getBoundingClientRect() - returns an object that has top and left properties relative to the viewport
* element.offsetWidth - width + padding + border
* element.offsetHeight - height + padding + border
* element.clientWidth - width + padding
* element.clientHeight - height + padding

There is nothing that gives you just the height and width of the element, but jQuery provides
* .width() and .height() - gives you the width and height of the element
* .innerWidth() and innerHeight() - gives you the width and height + padding
* .outerWidth() and outerHeight() - gives you the width and height + padding + border
* .outerWidth(true) and outerHeight(true) - gives you the width and height + padding + border + margin