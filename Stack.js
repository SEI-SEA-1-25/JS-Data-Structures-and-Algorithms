class Stack {
  // arr to implement stack
  constructor() {
    this.items = [];
  }
  // Functions to be implemented
  //size
  size() {
    return this.items.length;
  }
  // push(item)
  push(element) {
    // push element into the items
    this.items.push(element);
  }
  // pop()
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Nothing to pop!";
    return this.items.pop();
  }
  // peek()
  peek() {
    // return the top most element from the stack
    // but doesn't delete it.
    return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty() {
    //return if stack is empty
    return this.items.length == 0;
  }
  // printStack()
  printStack() {
    // let str = "";
    // for (let i = 0; i < this.items.length; i++) str += this.items[i] + "";
    // return str;
    console.log(this.items);
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

newStack.printStack();
console.log(newStack.size());
