ex1 = [5, 8, 1, 10, 7];
ex2 = [2, 6, 8, 13, 18, 19];
ex3 = [0, -23, 10];
ex4 = [90, -22, -20, 1];
// console.log(ex3);

const bubbleSort = (arr) => {
  //get length of arr
  let len = arr.length;
  //sort through the length w/i (amount of times the code below runs)
  for (let i = 0; i < len; i++) {
    //interior loop
    for (let j = 0; j < len; j++) {
      //if the current indexed number is bigger than
      //the integer to the right then:
      if (arr[j] > arr[j + 1]) {
        //the result in the current indexed number
        let result = arr[j];
        //swap
        arr[j] = arr[j + 1];
        arr[j + 1] = result;
      }
    }
  }
  return arr;
};
// console.log("🧶", bubbleSort(ex1));
// console.log("🕶", bubbleSort(ex2));
// console.log("🧦", bubbleSort(ex3));
// console.log("🧢", bubbleSort(ex4));
