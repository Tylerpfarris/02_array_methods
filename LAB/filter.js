const filterFunc = (arr, callback) => {
    let newArr = [];
    for (const item of arr) {
        const bool = callback(item);
        if (bool === true) {
            newArr = [...newArr, item]
        };
    };
    return newArr;
};
module.exports = filterFunc;