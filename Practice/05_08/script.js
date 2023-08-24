/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// 1. Find an element and add two different classes
// 2. Remove only one of the classses
// 3. Add a new attribute to an element
// 4. Request the value of the attribute
// 5. Change the value of the attribute
// 6. Add some inline CSS to an element by specifying the style property and setting its value

//Find element and add two different classes
document.querySelectorAll("h1")[1].classList.add("class1", "class2");

//Remove only one of the classes
document.querySelectorAll("h1")[1].classList.remove("class2");

//Add a new attribute to an element
document.querySelectorAll("h1")[1].setAttribute("class", "backpack__name");

//Add some inline CSS to an element by specifying the style property and setting its value
document.querySelectorAll("h1")[1].setAttribute("style", "color: red");

//Request the value of attributes -> returns NamesNodeMap
document.querySelector("h1").attributes;

//Change to value of one attribute
document.querySelectorAll("h1")[1].style.color = "blue";
