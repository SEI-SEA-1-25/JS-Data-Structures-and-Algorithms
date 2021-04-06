// Your Queue Class goes here
class Queue {
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
  enqueue(item) {
    this.items.push(item)
    return this.items.length
  }
  dequeue() {
    this.items.shift()
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


// size	Returns the (int) size of the the queue
// isEmpty	Returns True if the queue is empty, False otherwise
// enqueue	Adds an item to the the queue -- returns new size of the queue
// dequeue	Removes an item from the the queue -- returns new size of the queue
// peek	Returns the first item in the the queue but doesn't remove it
// print	Prints all items in the the queue