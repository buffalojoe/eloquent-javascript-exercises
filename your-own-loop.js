function loop(value, func, updateFunc, bodyFunc) {

    if (func(value)) {
        bodyFunc(value);
        loop(updateFunc(value), n => n > 0, n => n - 1, console.log);
    }

}

loop(3, n => n > 0, n => n - 1, console.log);
