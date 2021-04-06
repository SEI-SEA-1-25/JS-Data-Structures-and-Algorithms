// Your Queue Class goes here
class Queue {
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
    enqueue(x) {
        return this.data.push(x)
    }
    // pop
    dequeue() {
        return this.data.shift()
    }
    // peek
    peek() {
        return this.data[0]
    }
    // print
    print() {
        return this.data.forEach(x => {
            console.log(x)
        })
    }
}

// need to test funcs