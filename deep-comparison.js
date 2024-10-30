function deepEqual(value1, value2) {

    if (typeof value1 === "object" && typeof value2 === "object" && value1 != null && value2 != null) {
        if (Object.keys(value1).length != Object.keys(value2).length) {
            return false;
        } else {        
            for (i = 0; i <= Object.keys(value1).length; i++) {
                if (Object.keys(value1)[i] !== Object.keys(value2)[i]) {
                    return false;
                } else if (value1[Object.keys(value1)[i]] != value2[Object.keys(value2)[i]]) {
                    return false;
                } else {
                    continue;
                }
            } 
            return true;
        }
    } else if (value1 === value2) {
        return true;
    } else {
         return false;
    }
}

let obj = {
    here: {is: "an"},
    object: 2
};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

/*
let object1 = {value: 1}
let object2 = {value: 1}
console.log(object1 == object2)
console.log(object1.value == object2.value)
*/
