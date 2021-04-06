// Your Queue Class goes here


class Queue{
    constructor(){
        this.data = []
    }
    // return the size of the queue
    size(){
        return this.data.length
    }
    // isEmpty -- check if queue is empty
    isEmpty(){
        return this.size() == 0
    }
    // add on item to the queue
    enqueue(item){
        this.data.push(item)
        return this.size()
    }
    // remove an item from the queue
    // shift -- removes the first item from an array
    // unshift -- adds tot hte from of the array 
    // splice(0, 1) -- splice the 0th index only take one index
    dequeue(){
        this.data.shift()
        return this.size()
    }
    // return first item in queue but not remove it 
    peek(){
        return this.data[0]
    }
    // print out all item in the qeueue
    print(){
        this.data.forEach(element => {
            console.log(element)
        })
    }

}