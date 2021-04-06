// Your Queue Class goes here

class Queue {
    constructor(){
        this.container = []
    }

    size() {
        return this.container.length
    }

    isEmpty(){
        return this.container.length === 0;
    }

    enqueue(element){
        this.container.push(element)
        return this.container.length
    }

    dequeue(){
        this.container.shift()
        return this.container.length
    }

    peek(){
        return this.container[this.container.length -1]
    }

    print(){
        return console.log(this.container)
    }
}

const myQueue = new Queue()

myQueue.enqueue('Cubby')
myQueue.enqueue('Khaleesi')
myQueue.enqueue('Beau')
myQueue.enqueue('Ace')


myQueue.dequeue()
myQueue.print()