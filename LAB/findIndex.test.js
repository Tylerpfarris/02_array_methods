const findIndex = require("./findIndex");

describe('findIndex function', () => {
    it('returns the index of the found item, `-1` if no item is found', () => {
        const fruits = ['apple', 'banana', 'orange', 'strawberry'];
        expect(findIndex(fruits, (el) => el === 'orange')).toEqual(2)
        expect(findIndex(fruits, (el) => el === 'peach')).toEqual(-1)
        
    })
})