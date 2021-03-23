const filterFunc = require("./filter")

describe('filter function', () => {
    it('returns a new array of filtered items', () => {
        expect(filterFunc([2, 4, 5, 6, 7, 8, 9, 10], (el) => el < 6)).toEqual([2, 4, 5]);
        expect(filterFunc(['john', 'paul', 'jean'], (el) => el.startsWith('j')))
    });
});