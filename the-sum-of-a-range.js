function range(start, end, step){
    let rangeArray = [];

    if (step == null){
        step = 1
    } else {
        step = step
    }

    //console.log(step)
    if(step > 0){
        for (i = start; i <= end; i = i + step){
            //console.log(i)
            rangeArray.push(i);
        }
    } else {
        for (i = start; i >= end; i = i + step){
            //console.log(i)
            rangeArray.push(i);
        }
    }

    return rangeArray;
}

function sum(numArray){
    let total = 0;

    for(i = 0; i < numArray.length; i++){
        total += numArray[i]
    }

    return total
}

console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))
