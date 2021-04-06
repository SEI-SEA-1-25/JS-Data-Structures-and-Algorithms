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
        return this.size() == 0
    }

    enqueue(element)
    {
        this.data.push(element)
        return this.size()
    }

    dequeue()
    {
        if(this.isEmpty()){
            return
        } else {
            return this.data.shift()
        }
    }

    peek()
    {
        this.data[0]
    }

    print()
    {
        this.data.forEach(item => {
            console.log(item)
        })
    }
}

let myQueue = new Queue()


myQueue.enqueue('Heeeyy')
myQueue.enqueue('Hii')
myQueue.dequeue()
myQueue.print() 