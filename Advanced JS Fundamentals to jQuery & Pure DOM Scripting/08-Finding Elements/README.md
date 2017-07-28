# Notes

## Finding Elements

In order of speed:
- document.getElementById( id )
- document.getElementsByTagName( tag )
- document.getElementsByClassName( className )
- document.querySelector( selector )
- document.querySelectorAll( selector )

Nodelists returned by methods that return multiple elements
(like document.getElementsByTagName()) are live. Meaning, any changes made
to those elements will automatically be reflected by the document.