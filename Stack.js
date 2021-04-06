    // Your stack class goes here
    class Stack {
        constructor() {
        this.data = []
        }
    
        // return the size of the stack
        size() {
        return this.data.length
        }
    
        // returns bool if stack is empty
        isEmpty() {
        return this.size() == 0
        }
    
        // add an item to the stack
        push(item) {
        this.data.push(item)
        return this.size()
        }
    
        // remove an item from the stack
        pop() {
        this.data.pop()
        return this.size()
        }
    
        // return the first item in the stack
        peek() {
        return this.data[this.data.length - 1]
        }
    
        // prints all items in the stack
        print() {
        this.data.forEach(element => {
            console.log(element)
        })
        }
    } 
    
    