// Your stack class goes here
class Stack{
    constructor(){
        this.data = [];
    }

    size(){
        return this.data.length
    }
    
    isEmpty(){
        return this.size() == 0
    }
    
    push(item){
     this.data.push(item)
     return this.size()
    }
    
    pop(){
        this.data.pop()
        return this.size()
    }
    
    peak(){
        return this.dada(this.size() - 1)
    }
    
    print(){
        this.data.forEach(element => {
            console.log(element)
        })
     }
}