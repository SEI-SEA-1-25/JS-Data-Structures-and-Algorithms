// Your Queue Class goes here
// Your stack class goes here
class Que {
    constructor() {
        this.data  = []
    }

    size() {

        return this.data.length

    }

    isEmpty() {
        return this.size() == 0

    }

    push(item){
        this.data.push(item)
        return this.size()

    }

    pop(){
        this.data.pop()
        this.size()

    }

    peek(){
        return this.data[0]

    }

    print(){
        this.data.map((item) => {
            console.log(item)
        })

    }

}