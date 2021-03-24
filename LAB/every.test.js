const every = require("./every");

describe('every function', () => {
    it('returns true if every item in the array has returned true, otherwise false', () => {
        expect(every([1, 2, 3, 4, 5, 6, 7, 8], (el) => el < 9)).toEqual(true);
        expect(every([1, 2, 3, 4, 5, 6, 7, 8], (el) => el > 9)).toEqual(false);
        expect(every(['jean', 'john', 'james'], (el) => el.startsWith('j'))).toEqual(true);
        expect(every(['jean', 'john', 'james', 'paul'], (el) => el.startsWith('j'))).toEqual(false);
    });
});