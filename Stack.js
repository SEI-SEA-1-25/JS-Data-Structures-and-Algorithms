// Your stack class goes here
class Stack {
  constructor() {
    this.items = []
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    if (this.items.length == 0) {
      return true
    } else { return false }
  }
  push(item) {
    this.items.push(item)
    return this.items.length
  }
  pop() {
    this.items.pop()
    return this.items.length
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  print() {
    this.items.forEach(element => {
      console.log(element);
    });
  }
}
// size	Returns the (int) size of the stack
// isEmpty	Returns True if stack is empty, False otherwise
// push	Adds an item to the stack -- returns new size of the stack
// pop	Removes an item from the stack -- returns new size of the stack
// peek	Returns the first item in the stack but doesn't remove it
// print	Prints all items in the stack