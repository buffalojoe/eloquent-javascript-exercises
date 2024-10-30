function deepEqual(value1, value2) {
    if (value1 == value2) {
        return true;
    }

    if (value1 == null || typeof value1 != "object" ||
        value2 == null || typeof value2 != "object") {
        console.log("2ns if taken")
        return false;
    }

    if (Object.keys(value1).length != Object.keys(value2).length) {
        return false;
    }

    for (let [index, key] of Object.keys(value1).entries()) {
        if (Object.keys(value1)[index] != Object.keys(value2)[index]) {
            return false;
        } else if (value1[Object.keys(value1)[index]] != value2[Object.keys(value2)[index]] && typeof value1[Object.keys(value1)[index]] == "object" && typeof value2[Object.keys(value2)[index]] == "object") {
            deepEqual(value1[index], value2[index]);
        } else if (value1[Object.keys(value1)[index]] != value2[Object.keys(value2)[index]]){
            return false;
        } else {
            continue;
        }
    }

    return true;
}

let obj = {
    here: {is: "an"},
    object: 2
};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
