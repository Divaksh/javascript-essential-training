/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import PcKeyboard from "./PcKeyboard.js";
import Laptop from "./Laptop.js";

const myKeyboard = new PcKeyboard(
  "Mechanical",
  104,
  false,
  true,
  "CherryMX",
  "Brown",
  "00FF00"
);

const myLaptop = new Laptop(2048, 32, "AMD", "Nvidia", "OLED", 14);

console.log("The myKeyboard object:", myKeyboard);
console.log("The myLaptop object:", myLaptop);

console.log("Updating the data...");

myKeyboard.toggleBacklit(true);
myKeyboard.toggleNumLock(true);

myLaptop.changeMomory(64);
myLaptop.changeStorage(4096);

console.log("Updated Data");

console.log("The myKeyboard object:", myKeyboard);
console.log("The myLaptop object:", myLaptop);
