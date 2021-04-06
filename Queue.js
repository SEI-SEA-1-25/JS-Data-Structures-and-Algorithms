// Your Queue Class goes here
class Queue{
    constructor(){
        this.data = [];
    }
  
    size(){
        return this.data.length
    }

    isEmpty(){
        return this.size() == 0
    }

    enqueue(item){
        this.data.push(item)
        return this.size()
    }

    dequeue(){
        this.data.shift()
        return this.size()
    }

    peak(){
      return this.data[0]
    }

    print(){
     this.data.forEach(element => {
         console.log(element)
     })
     }
}
