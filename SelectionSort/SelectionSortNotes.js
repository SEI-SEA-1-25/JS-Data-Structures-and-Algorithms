// ----------------Selection Sort---------------- //

// Sort through array looking for smallest number
// starts at index[0] and moves right looking for lowest number(we will call it lilBoi).
// it holds lilBoi and finishes checking it against the numbers to the right
//to make sure lilBoi is in fact the lil'est boy.
//pushes lilBoi all the way to index[0], then lilBoi becomes sortedBoi
// it then starts again and finds another lilBoi. But this slightly higher
//lilBoi gets pushed to index[1] once confirmed.

// 4, [2], 0, 21, 3
// 4, 2, [0], 21, 3
// makes sure there isn't anything lower
// 0, [2], 21, 3
// 0, 2, [21], 3
// 0, 2, 21, [3]
// 0, 2, 3, [21]
