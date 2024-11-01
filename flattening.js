/*
use the reduce method in combination with the concat method to "flatten"
an array of arrays into a single array that has all the elements of the original
arrays
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(array, combine, start) {
    let current = start;

    for (let element of array) {
        current = combine(current, element)
    }

    return current;

}

console.log(reduce(arrays, (a, b) => a.concat(b), []));
