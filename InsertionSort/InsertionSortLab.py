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
        k_left = i-1
        #while the leftkey is greater than or equal to 0 
        # (stops running the key when/if it makes it to index[0])
        #and the key less than the value of the arr at leftkey
        #                           print("LEFT INDEX:", arr[k_left])
        #
        while k_left >= 0 and key < arr[k_left]:
             #swap happens here
            arr[k_left+1] = arr[k_left]
            #move left key over 1
            k_left -= 1
        #sets the key relative to the moved left key    
        arr[k_left+1] = key


arr_1 = [5,2,1,10,7];
# [5, 2,] 1, 10, 7
# 2, [5, 1,] 10, 7
# 1, 2, [5, 10,] 7
# 1, 2, 5, [10, 7]
# 1, 2, 5, 7, 10
 
arr_2 = [14,46,43,27,57,41,45,21,70]

insertion_sort(arr_1)
insertion_sort(arr_2)
print(f"🎉 Insertion Sorted 🥳\nArray 1:{arr_1}\nArray 2:{arr_2}")