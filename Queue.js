class Queue {
    constructor () {
        this.data = []
    }

    size() {
        return this.data.length
    }

    isEmpty() {
        if (this.size == 0) {
            return true
        } else return false
    }

    enqueue(value) {
        this.data.push(value)
        return this.size()
    }

    // remove and item from the queue
    // .shift() - removes the first tiem from an array
    // .unshift() - adds to the front of the array
    // .splice(0, 1) - splice the 0th index only take on index
    dequeue() {
        var popedVal = ""
        if (this.size != 0) {
            var popedVal = this.data.shift()
        }
        return popedVal
    }

    peek() {
        return this.data[0]
    }

    print() {
        this.data.forEach( e => {
            console.log(`the data is ${e}`);
        })
    }
}
queue = new Queue()
// stack.push([3, 4, 5])
queue.enqueue(4)
queue.enqueue(5)
queue.print();