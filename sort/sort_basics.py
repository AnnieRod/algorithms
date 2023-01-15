
# create a function that uses BubbleSort to sort an array

def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# create a function that uses BubbleSort to sort a linked list

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# It uses while loop to iterate through the list, comparing each node's value to the next node's value. 
def bubbleSortList(head):
    if not head:
        return None
    else:
        current = head
        while current.next:
            if current.val > current.next.val:
                current.val, current.next.val = current.next.val, current.val
            current = current.next
        bubbleSort(head)
    return head

# create a function to sort an array with Selection

def selectionSortArr(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

