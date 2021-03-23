
const findIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const bool = callback(arr[i])
        if (bool === true) {
            return i;
        };
    };
    return -1;
};

module.exports = findIndex;


