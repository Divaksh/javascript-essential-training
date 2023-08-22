class Keyboard {
  constructor(
    // Defines parameters:
    keyboardType,
    keys,
    numLock,
    backlit,
    switchType,
    switchColor,
    switchRgbValue
  ) {
    // Define properties:
    this.keyboardType = keyboardType;
    this.keys = keys;
    this.numLock = numLock;
    this.backlit = backlit;
    //Nested object
    this.keyboardSwitch = {
      color: switchColor,
      rgbValue: switchRgbValue,
      switchType: switchType,
    };
  }
  // Methods like normal functions
  toggleNumLock(value) {
    this.numLock = value;
  }
  toggleBacklit(value) {
    this.backlit = value;
  }
  updateSwitchRgbColor(value) {
    this.switch.switchRgbValue = value;
  }
}

export default Keyboard;
