// Your Queue Class goes here
class Queue {
  constructor() {
    this.data = []
  }

  // returns size of queue
  size() {
    return this.data.length
  }

  // checks if queue is empty
  isEmpty() {
    return this.size() == 0
  }

  // add one item to the queue
  enqueue(item) {
    this.data.push(item)
    return this.size()
  }

  // remove one item from queue
  dequeue() {
    this.data.shift()
    return this.size()
  }

  // returns firs item in queue w/out removing
  peek() {
    return this.data[0]
  }

  // prints all items in queue
  print() {
    this.data.forEach(element => {
      console.log(element)
    })
  }

}