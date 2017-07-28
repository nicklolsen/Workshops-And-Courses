# Notes

* element.childNodes
* element.firstChild
* element.lastChild
* element.nextSibling
* element.previousSibling
* element.parentNode
* element.children

## element.childNodes vs element.children
.childNodes will give you all of the child nodes of the current element where
.children will give you all of the child nodes *except for the text nodes*.
This is really helpful because you don't have to filter out text nodes.

Keep in mind that *all* of the collections on element *except* for .children
will give you text nodes.

