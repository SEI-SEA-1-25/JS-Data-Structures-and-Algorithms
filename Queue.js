class Queue {
  // arr to implement Q
  constructor() {
    this.items = [];
  }
  //size
  size() {
    return this.items.length;
  }
  // push(item)
  enqueue(element) {
    // push element into the items
    this.items.push(element);
    return this.size();
  }
  // pop()
  dequeue() {
    // return top most element in the queue
    // and removes it from the queue
    // Underflow if queue is empty
    this.items.shift();
    return this.size();
  }
  // peek()
  peek() {
    // return the top most element from the queue
    // but doesn't delete it.
    return this.items[0];
  }
  // isEmpty()
  isEmpty() {
    //return if queue is empty
    return this.items.length == 0;
  }
  // printQueue()
  printQueue() {
    // let str = "";
    // for (let i = 0; i < this.items.length; i++) str += this.items[i] + "";
    // return str;
    console.log(this.items);
  }
}

const newQueue = new Queue();
//test to see if new Queue is empty
// console.log(newQueue.isEmpty()); //true

//test to see if pop returns "nothing to check"
// console.log(newQueue.pop());

//adding elements into Queue
newQueue.enqueue(101);
newQueue.enqueue(11);
newQueue.enqueue(22);

newQueue.printQueue();
console.log(newQueue.size());
