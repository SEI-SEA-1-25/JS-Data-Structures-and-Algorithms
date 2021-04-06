class Stack {
  // arr to implement stack
  constructor() {
    this.data = [8, 9, 2903, "🕷", 187356, 1];
  }
  // Functions to be implemented
  //size
  size() {
    return this.data.length;
  }
  // push(item)
  push(element) {
    // push element into the data
    this.data.push(element);
  }
  // pop()
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.data.length == 0) return "Nothing to pop!";
    return this.data.pop();
  }
  // peek()
  peek() {
    // return the top most element from the stack
    // but doesn't delete it.
    return console.log(`Top of stack: ${this.data[this.data.length - 1]}`);
  }
  // isEmpty()
  isEmpty() {
    //return if stack is empty
    return this.data.length == 0;
  }
  // printStack()
  printStack() {
    console.log(this.data);
  }
}
const newStack = new Stack();

//test to see if new stack is empty
// console.log(newStack.isEmpty()); //true

//test to see if pop returns "nothing to check"
// console.log(newStack.pop());

//adding elements into stack
newStack.push(101);
newStack.push(11);
newStack.push(22);
newStack.push("🐚");
newStack.peek();

newStack.printStack();
console.log(`${newStack.size()} pancakes in stack. 🥞`);
