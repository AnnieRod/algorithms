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

console.log(interleaveArrays([77,22,11,22], [2,6,7,2,6,2]));