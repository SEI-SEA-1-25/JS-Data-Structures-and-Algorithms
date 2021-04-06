// Your stack class goes here
class Stack {
    constructor() {
        this.data = []
    }

    // size
    size() {
        return this.data.length
    }
    // is empty
    isEmpty() {
        return this.data.size() == 0
    }
    // push
    push(x) {
        return this.data.push(x)
    }
    // pop
    pop() {
        return this.data.pop()
    }
    // peek
    peek() {
        return this.data[this.data.length - 1]
    }
    // print
    print() {
        return this.data.forEach(x => {
            console.log(x)
        })
    }
}

// need to test