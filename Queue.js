// Your Queue Class goes here

class Queue {
    constructor() {
      this.data = []
    }
  
    // returns the size of the queue
    size() {
      return this.data.length
    }
  
    // returns bool if queue is empty
    isEmpty() {
      return this.size() === 0
    }
  
    // adds item to queue -- returns new size
    enqueue(item) {
      this.data.push(item)
      return this.size()
    }
  
    // removes item from queue -- returns new size
    dequeue(item) {
      this.data.shift()
      return this.size()
    }
  
    // returns the first item in the queue 
    peek() {
      return this.data[0]
    }
  
  
    // logs all items in the queue
    print() {
      this.data.forEach(element => {
        console.log(element)
      })
    }
  }
