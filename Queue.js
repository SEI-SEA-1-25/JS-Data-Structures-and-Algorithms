class Queue{
    constructor()
    {
        this.data = []
    }

    size()
    {
        return this.data.length
    }

    isEmpty()
    {
        if (this.data.length == 0) {
            return true
        }else {
            return false
        }
    }

    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        if(this.isEmpty()){
            return
        } else {
            return this.items.shift()
        }
    }

    peek()
    {
        this.data[0]
    }

    print()
    {
        return console.log(this.container)
    }
}

let myQueue = new Queue()


myQueue.enqueue('Heeeyy')
myQueue.enqueue('Hii')
myQueue.dequeue()
myQueue.print() 