const map = (arr, callback) => {
    let newArr = [];
    for (const i of arr) {
        const newEl = callback(i);
        newArr = [...newArr, newEl];
    }
    return newArr;
}



module.exports = map

