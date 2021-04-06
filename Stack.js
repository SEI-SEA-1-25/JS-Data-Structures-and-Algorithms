// Your stack class goes here
class Stack {
    constructor() {
        this.data = [
        ]
    }
    size(){
        return this.data.length
    }

    isEmpty(){
        return this.size() == 0
    }

    push(item){
        this.data.push(item)
        return this.size
    }

    pop(){
        this.data.pop()
        return this.size()
    }

    peek(){
        
    }

    print(){
        return this.data.forEach(element => {
            console.log(element)
        })
    }
}