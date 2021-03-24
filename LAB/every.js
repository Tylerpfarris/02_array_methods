const every = (arr, callback) => {
    let bool = true;
    for (let item of arr) {
        if (!callback(item)) bool = false;
    }
    return bool;
};

module.exports = every;