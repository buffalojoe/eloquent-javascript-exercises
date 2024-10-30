function reverseArray(array1){
    let reversedArray = []

    for (i = array1.length - 1; i >= 0 ; i--){
        reversedArray.push(array1[i]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array1){
    let reversedArray = []

    for (i = array1.length - 1; i >= 0 ; i--){
        reversedArray.push(array1[i]);
    }

    arrayValue = reversedArray
    return array1;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
