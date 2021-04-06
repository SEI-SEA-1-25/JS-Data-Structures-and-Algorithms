// Your stack class goes here
class Stack {
    constructor() {
        this.data = []
    }


// return the size of the stack
size() {
    return this.data.length
}

// check if the stack is empty or not -- return a bool
isEmpty() {
    return this.size() == 0
}

// add item to stack -- return new size of the stack
push(item) {
    this.data.push(item)
    return this.size()
}

// remove item from the stack -- always the last
pop() {
    this.data.pop()
    return this.size()
}

// return the first item in the stack without removing it
peek() {
    return this.data[this.size() - 1]
}

// print out the stack
print() {
    this.data.forEach(element => {
        console.log(element)
    })
}

}