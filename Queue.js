// Your Queue Class goes here
class Queue {
    constructor() {
        this.data = []
    }
    size(){
        return this.data.length
    }
    isEmpty() {
        return this.data.length == 0
    }
    enqueue(item) {
        this.data.push(item)
        console.log(this.data)
    }
    dequeue() {
        if(this.data.length == 0)  {
            return
        } else {
            return this.data.pop(0)
        }
    }
    peek() {
        return this.data[0]
    }
    print() {
        let string = '';
        for(let i = 0; i < this.data.length; i++) {
            string += this.data[i] + " "
        }
        return string
    }
}

// ### TEST SUITE ###
// # Use the following code to help you implement the Queue
my_queue = new Queue()

console.log('Is Queue empty?', my_queue.isEmpty())

my_queue.enqueue('A')
my_queue.enqueue('B')
my_queue.enqueue('C')
my_queue.enqueue('D')
console.log('Is Queue empty?', my_queue.isEmpty())
console.log('Dequeued item:', my_queue.dequeue())
console.log('First item:', my_queue.peek())

console.log('Here are all the items in the queue:', my_queue.print())
console.log('The size of my stack is:', my_queue.size())
