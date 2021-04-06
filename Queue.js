// Your Queue Class goes here
class Queue {
    constructor() {
        this.data = []
    }

    // returns the size of the queue
    size() {
        return this.data.length
    }

    // isEmpty -- check if queue is empty
    isEmpty() {
        return this.size() == 0
    }

    // add on item to the queue
    enqueue() {
        this.data.push(item)
        return this.size()
    }

    // remove item from the queue
    // can also just use the shift method -- this.data.shift -- no args needed
    // splice method -- splice(0, 1) --splice 0 index and only take one index
    dequeue() {
        this.data.splice(0, 1)
        return this.size()

    }

    // return the first item in queue but not remove it
    peek() {
        return this.data[0]     
    }

    // print out all items in the queue
    print() {
        this.data.forEach(element => {
            console.log(element)
        })
    }

}
