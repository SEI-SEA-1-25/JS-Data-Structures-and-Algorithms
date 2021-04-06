//?-----------------------------
class Stack {
  constructor() {
     this.data = []
   }
     
  
  //?------------- PUSH ----------------
  //? Add element to top of the stack
  //?-----------------------------------
  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    console.log(`${element} added to ${this.count}`);
    console.clear();
    return this.count - 1;
   }
   
  //?------------ POP -----------------
  //? return and remove top element
  //? return undefined if stack empty
  //?----------------------------------
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count];
    this.count -= 1;
    console.log(`${deleteItem} removed ${this.item}`);
    return deleteItem;
  }

  //?---------------- PEEK -------------------

  peek() {
    console.log(`top element is in ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

//?------------------- isEmpty --------------------
//?
// isEmpty() {
   
   // }
//?------------------------------------------------



   //?-----------------------------
   const stack = () => new Stack();
   //?-----------------------------
   // !stack.size(1);
   // !console.log(stack); // [1]
   //?-----------------------------
   stack.push(2);
   console.log(stack); // [1,2]
   //?-----------------------------
   stack.peek(3);
   console.log(stack); // [1,2,3]
   //?-----------------------------
   // !stack.isEmpty(4);
   // !console.log(stack); // [1,2,3,4]
   //?-----------------------------
   stack.push(5);
   console.log(stack); // [1,2,3,4,5]
   //?-----------------------------
   stack.pop(5);
   console.log(stack);
//?-----------------------------


//?-----------------------------
//?-----------------------------
//?-----------------------------
//?-----------------------------