/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/*
    Keyboard Object
*/

const keyboard = {
  type: "Mechanical",
  keys: 104,
  numLock: true,
  backlit: false,
  switch: {
    type: "cherrymx",
    color: "blue",
    rgbValue: "FFFFFF",
  },
  toggleBacklit: function (value) {
    this.backlit = value;
  },
  toggleNumLock: function (value) {
    this.numLock = value;
  },
  changeLedColor: function (rgbColor) {
    this.switch.rgbValue = rgbColor;
  },
};

const laptop = {
  brand: "Asus",
  memorySlot: 1,
  memory: {
    brand: "Kingston",
    size: 12,
    channel: "Single",
  },
  storageCount: 1,
  storage: {
    brand: "WD",
    size: 1024,
    type: "SSD",
  },
  processor: {
    brand: "AMD",
    model: "Ryzen™ 7 5800X",
    socket: "AM4",
  },
  chnageStorage: function (brand, size, type) {
    this.storage.brand = brand;
    this.storage.size = size;
    this.storage.type = type;
  },
};
