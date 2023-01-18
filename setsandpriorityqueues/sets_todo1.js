//Given two unsorted arrays create a new one containing the elements of both

function interleaveArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        newArr.push(arr1[i]);
        newArr.push(arr2[j]);
        i++;
        j++;
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

interleaveArrays([77,22,11,22], [2,6,7,2,6,2]);

// Merge two sorted arrays into a new one with a multiset of all values

function mergeArrays(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i]);
            newArr.push(arr2[j]);
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

mergeArrays([1,2,2,2,7], [2,2,6,6,7]);