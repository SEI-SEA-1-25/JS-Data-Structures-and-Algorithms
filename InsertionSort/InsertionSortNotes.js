// ----------------Insertion Sort---------------- //

//assume original array is not sorted.
//start with index[0]. and compare to index[1] (anything to right)
//unlike bubble sort, it compares the current index not just to the
//index to its right, but also works that integer against all to the left.
//number gets sorted only once. no need to loop through the array over & over.
//      *Insertion sort is often used when memory is at a premium.
//      *Sorts array in place. No new arrays created to sort.
//      *Sorting in place is a slower style of sorting.

//Example (in motion)
originalArr = [10, 7, 1, 3];
move1 = [7, 10, 1, 3];
// it looks like this:
// 7, 10, 1
// 7, 1, 10
// 1, 7, 10
move2 = [1, 7, 10, 3];
move3 = [1, 3, 7, 10];

//Bubble sort would...
// 10, 7, 1, 3 (OG)
// 7, 10, 1, 3
// 7, 1, 10, 3
// 7, 1, 3, 10
// 1, 7, 3, 10
// 1, 3, 7, 10
//MUCH LONGER! don't use bubble sort!
