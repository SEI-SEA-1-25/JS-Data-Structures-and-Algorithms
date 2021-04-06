def insertionSort(l):

    for i in range(1, len(l)):

        # element to be compared
        current = l[i]

        # comparing the current element with the sorted portion and swapping
        while i > 0 and l[i-1] > current:
            l[i] = l[i-1]
            i = i-1
            l[i] = current
    return l


print(insertionSort([5, 2, 1, 9, 0, 4, 6]))
