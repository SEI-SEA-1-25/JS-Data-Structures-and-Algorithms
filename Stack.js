// Your stack class goes here
class Stack {
    constructor() {
        this.data = []
    }
    size(){
        return this.data.length
    }
    isEmpty() {
        return this.data.length == 0
        // return this.data.size() == 0
    }
    push(item) {
        this.data.push(item)
        return this.data.length
        // return this.size()
    }
    pop() {
        if(this.data.length == 0)  {
            return
        } else {
            this.data.pop();
            // console.log(this.data.length)
            // return this.size()
            return this.data
        }
    }
    peek() {
        return this.data[this.data.length - 1]
        // return this.data[this.size() - 1]
    }
    print() {
        let string = '';
        for(let i = 0; i < this.data.length; i++) {
            string += this.data[i] + " "
        }
        //this.data.forEach(element => {
        //     console.log(element)
        // })
        return string
        // console.log(string)
    }
}


// ### TEST SUITE ###
// # Use the following code to help you implement the Stack
my_stack = new Stack()

console.log('Is Stack empty? Should be True: \n', my_stack.isEmpty())

my_stack.push('A')
my_stack.push('B')
my_stack.push('C')
my_stack.push('D')
console.log('Is Stack empty? Should be True: \n', my_stack.isEmpty())
console.log('Popped item should be D: \n', my_stack.pop())
console.log('Top item should be C: \n', my_stack.peek())
console.log('Here are all the items in the stack - Should be A B C: \n', my_stack.print())
console.log('The size of stack should be 3: \n', my_stack.size())

// # Bonus Question - How would our Stack implementation change if we
// # created it with a LinkedList instead of a List?
// # What is a LinkedList?