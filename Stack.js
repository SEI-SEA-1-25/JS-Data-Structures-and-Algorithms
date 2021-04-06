class Stack{
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

    push(element)
    {
        this.data.push(element)
        return this.size()
    }

    pop()
    {
        this.data.pop()
        return this.size()
    }

    peek()
    {
        return this.data[this.size() - 1]
    }

    print()
    {
        this.data.forEach(item => {
            console.log(item)
        })
    }
}

const myStack = new Stack()

myStack.push('new stack')
myStack.push('the other one')
myStack.pop()
myStack.print()