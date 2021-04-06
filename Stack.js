class Stack {
    constructor () {
        this.data = []
    }

    size() {
        return this.data.length
    }

    isEmpty() {
        if (this.size == 0) {
            return true
        } else return false
    }

    push(value) {
        this.data.push(value)
        return this.size()
    }

    pop() {
        var popedVal = ""
        if (this.size != 0) {
            var popedVal = this.data.pop()
        }
        return popedVal
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    print() {
        this.data.forEach( e => {
            console.log(`the data is ${e}`);
        })
        // var str = ""
        // for (let i=0; i < this.data.length; i++) {
        //     str += this.data[i] + " ";
        // }

        // for (var x in this.data){
        //     console.log(x);
        // }
    }
}
stack = new Stack()
// stack.push([3, 4, 5])
stack.push(4)
stack.push(5)
// console.log(stack.data);
stack.print();

