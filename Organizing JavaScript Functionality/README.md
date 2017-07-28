# Organizing JavaScript Functionality
https://frontendmasters.com/courses/organizing-javascript/

## Description
The first half of the course is frontend focused, the second half is backend focused. As of today July 28, 2017, I haven't started focusing on the backend so I have not gone on to the second half of the course.

## Takeaways
* Use the module pattern to expose global identifiers that you can use to create private namespaces with public interfaces. See 01-Frontend/js/details.js, 01-Frontend/js/header.js, and 01-Frontend/js/carousel.js for examples.
* Take care to make sure code is in the right module. All code in carousel.js should work only with the carousel. This is less obvious than it sounds.
* Modules that call the functions of other modules are closely tied together and highly dependent on eachother. Avoid this by using event based architectures which can help create code that is resilient, modular and easily extendable.

## Table Of Contents

1. Beyond the Basics
2. Organizing Code
3. Modules
4. Server-side JavaScript
5. Adding a Shared Module
