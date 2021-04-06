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
        if (this.data.length == 0) {
            return true
        }else {
            return false
        }
    }

    push(element)
    {
        this.data.push(element)
    }

    pop()
    {
        if (this.data.length == 0){
            return
        } else {
            this.data.pop()
        }
    }

    peek()
    {
        return this.data[this.data.length - 1]
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



