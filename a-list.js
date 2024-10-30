function arrayToList(array){
    let listPart = null;
    let list = null;

    for (i = array.length - 1; i >= 0; i--){
        listPart = {value: array[i], rest: list};
        list = listPart;
    }

    return list;
}

function listToArray(list){
    
    newList = [];

    for (let node = list; node; node = node.rest) {
        newList.push(node.value);       
    }

    return newList;
}

function prepend(element, list) {
    newList = {value: element, rest: list};

    return newList;
}

function nth(list, num, index = 0) {

    for (let node = list; node; node = node.rest) {

        if (index == num) {
            return node.value;
        } else {
            return nth(node.rest, num, index + 1);
        }

    }

    return undefined;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
