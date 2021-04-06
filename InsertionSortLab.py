def insertion_sort(arr):
    # iterate through arr
    # check index[1] against ALL to the left
    # checks one to the left (if smaller) -> moves it left REAPEATS
    long = len(arr)
    #loop through arr's length starting at index[1]
    for i in range(1, long):
        #they key is the value of the current selected index
        key = arr[i]
        #set index to the keys left to var
        idx_left = i-1
        #while the leftkey is greater than or equal to 0
        #and the key less than the value of the arr at leftkey
        #                           print(" 🐚", arr[idx_left])
        while idx_left >= 0 and key < arr[idx_left]:
             #then: the number on the left moves one right
             # (inturn moving the key right)
            arr[idx_left+1] = arr[idx_left]
            idx_left -= 1
        arr[idx_left+1] = key


arr_1 = [5, 2, 1, 10, 7];
# [5, 2,] 1, 10, 7
# 2, [5, 1,] 10, 7
# 1, 2, [5, 10,] 7
# 1, 2, 5, [10, 7]
# 1, 2, 5, 7, 10

insertion_sort(arr_1)
for i in range(len(arr_1)):
    print(arr_1[i])