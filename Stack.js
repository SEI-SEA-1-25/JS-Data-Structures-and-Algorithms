// Your stack class goes here

class Stack {
    constructor(){
        this.container = []
    }

    size(){
        return this.container.length
    }

    isEmpty() {
        return this.container.length === 0;
    }

    push(element){
        this.container.unshift(element)
        return this.container.length
    }

    pop(){
        this.container.shift()
        return this.container.length
    }  

    peek(){
        return this.container[0]
    }

    print(){
        return console.log(this.container)
    }

}

const myStack = new Stack()

myStack.push('dave')
myStack.push('joe')
myStack.push('dan')

console.log(myStack.peek())

myStack.pop();

myStack.print();