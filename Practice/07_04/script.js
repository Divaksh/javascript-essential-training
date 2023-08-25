/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

//Array creation using Literals
const thingsAroundMe = [
  "Keybaord",
  "Mouse",
  "Mobile",
  "Monitor",
  "Sipper",
  "Notebook",
  "Pen",
  "Bag",
];

//Array creation using Array constructor
const thingsAroundMe1 = new Array(
  "Keybaord",
  "Mouse",
  "Mobile",
  "Monitor",
  "Sipper",
  "Notebook",
  "Pen",
  "Bag"
);

//Array creation using String.prototype.split()
const thingsAroundMe2 = "Keybaord, Mouse, Mobile, Monitor, Sipper, Notebook, Pen, Bag".split(
  ", "
);

console.log("thingsAroundMe", thingsAroundMe);
console.log("thingsAroundMe1", thingsAroundMe1);
console.log("thingsAroundMe2", thingsAroundMe2);

//Removing the last item from the above array
console.log("Removing the last item");
const lastItem = thingsAroundMe.pop();
console.log(thingsAroundMe);

//Adding the last item as a first item into the array
thingsAroundMe.unshift(lastItem);
console.log("Adding last item as a first item");
console.log(thingsAroundMe);

//Short the all items in alphabetical order
thingsAroundMe.sort();
console.log(thingsAroundMe);

// Use the find() method to find a specific item in the array
console.log(thingsAroundMe.find((thing) => thing === "Mouse"));

// Remove the item you found using the find method from the array.
let elementIndex = thingsAroundMe.findIndex((thing) => thing == "Mouse");
thingsAroundMe.splice(elementIndex, 1);
console.log(thingsAroundMe);
