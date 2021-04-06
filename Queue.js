// Your Queue Class goes here
class Queue {
    constructor() {
        this.data = []
    }

    // return the size of the queue
    size() {
        return this.data.length
    }
    // check if the queue is empty
    isEmpty() {
        return this.size() == 0
    }

    // add on item to the queue
    enqueue(item) {
        this.data.push(item)
        return this.size()
    }

    // remove item from the queue
    dequeue() {
        this.data.shift()
        return this.size()
    }

    // return the first item in queue but not remove it
    peek() {
        return this.data[0]
    }

    // print out all the items in the queue
    print() {
        this.data.forEach(element => {
            console.log(element)
        })
    }
}