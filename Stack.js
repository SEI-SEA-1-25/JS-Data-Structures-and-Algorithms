// Your stack class goes here
class Stack {
  constructor() {
    this.data = []
  }

  // returns size of the stack
  size() {
    return this.data.length
  }

  // check if stack is empty or not -- boolean
  isEmpty() {
    return this.size() == 0
  }

  // add item to stack -- return new size of stack
  push(item) {
    this.data.push(item)
    return this.size()
  }

  // remove item from stack --  always last
  pop() {
    this.data.pop()
    return this.size()
  }

  // returns first item in stack w/out removing
  peek() {
    return this.data[this.size() - 1]
  }

  // prints stack
  print() {
    this.data.forEach(element => {
      console.log(element)
    })
  }

}