const reduceFunc = (arr, callback, initialValue) => {
    let acc;
    let i;
    if (initialValue) {
        acc = initialValue;
        i = 0;
    } else {
        acc = arr[0];
        i = 1;
    }
    for (i; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }
    return acc;
}

module.exports = reduceFunc