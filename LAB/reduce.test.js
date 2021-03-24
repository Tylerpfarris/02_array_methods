const reduceFunc = require("./reduce")

describe('reduce function', () => {
    it('returns the final accumulator value', () => {
        expect(reduceFunc([1, 2, 3, 4, 5], (acc, item) => acc + item, 0)).toEqual(15);
        expect(reduceFunc([1, 2, 3, 4, 5], (acc, item) => acc * item, 0)).toEqual(120);
        expect(reduceFunc([1, 2, 3, 4, 5], (acc, item) => acc - item, 0)).toEqual(-13);
    });
    it('should take and array of strings and return an object with properties matchiung the strings and values of 1', () => {
        const arr = ['banana', 'strawberry', 'pear', 'peach'];
        const result = reduceFunc(arr, (acc, item) => {
            acc[item] = 1
            return acc;
        }, {});
        const expectation = {
            banana: 1,
            strawberry: 1,
            pear: 1,
            peach: 1,
        };
        expect(result).toEqual(expectation);
    })
});