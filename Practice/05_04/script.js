/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

/* 
1. Identify specific elements you want to target.
2. Use script.js to find those elements.
3. Target specific elements nested inside other elements.
4. Try advanced CSS queries tp get specific targets.
5. Experiment with querySelector and querySelectorAll.
6. try populating a variable with an element higher up, 
on that variable to find one of its children. */

// Change the lid status to open of first beg using quarySelector
const lidStatus = document.querySelector("li:last-child");
lidStatus.innerHTML = "Lid status: opened";

//Change the background of all bag titles/h1 tags
document
  .querySelectorAll("h1")
  .forEach((items) => (items.style.backgroundColor = "FFFF00"));
