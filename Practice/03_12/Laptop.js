class Laptop {
  constructor(storage, memory, processor, gpu, displayType, displaySize) {
    this.storage = storage;
    this.memory = memory;
    this.processor = processor;
    this.gpu = gpu;
    this.display = {
      type: displayType,
      size: displaySize,
    };
  }
  changeMomory(value) {
    this.memory = value;
  }
  changeStorage(value) {
    this.storage = value;
  }
}

export default Laptop;
