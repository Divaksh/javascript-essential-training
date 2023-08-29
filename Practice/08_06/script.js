/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/*
 *   Create a basic function declaration
 *   Make a change to an element in the DOM (querySelector, adding a class, and so on)
 *   Call the function declaration
 *   Create a basic function expression, use variable and anonymous function inside.
 *   Find an element
 *   Make a change to it
 *   Call the function
 *   Confirms that it works
 *   Repeat with an arrow function
 */

// Functions Declaration
// 1. Classic
// 2. Advance (Expression)
// 3. IIFE
// ---------------------
// 4. Arrow Functions Expression
// 5. Arrow without return
// 6. Arrow without breakets

import Student from "./Student.js";

//classic function
function addStudent(objName, name, year, course) {
  objName = new Student(name, year, course);

  const content = `<ul><li>Student Name : ${objName.name}</li>
                     <li>Student Year : ${objName.year}</li>
                     <li>Student Course: ${objName.course}</li></ul>`;
  const newElement = document.createElement("div");
  newElement.classList.add("std");
  newElement.innerHTML = content;

  document.querySelector("main").append(newElement);
}

addStudent("a", "Divaksh Jain", 2, "Computer");
addStudent("b", "Divaksh Jain", 2, "Computer");

//Advanced version of function or function expression
const doSomeMath = function (a, b) {
  return a + b;
};

//anonymous function
(function (a) {
  return a + 100;
});

//Arrow function
(a) => {
  return a + 100;
};

//Arrow function without return
(a) => a + 100;

//Arrow function without paranthais
(a) => a + 100;

//IIFE - Immediately invoked function expression
(function () {
  let a = 1;
  let b = 2;
  let c = doSomeMath(a, b);
  console.log(`Sum is ${c}`);
})();

//IIFE Arrow function
(() => {
  let a = 1;
  let b = 2;
  let c = doSomeMath(a, b);
  console.log(`Sum is ${c}`);
})();
