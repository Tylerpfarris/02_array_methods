const  map = require("./map")

describe('map function', () => {
    it('should preform a call back function for each item in the array', () => {
      
        expect(map([1, 2, 3, 4, 5], (el) => el + 2)).toEqual([3, 4, 5, 6, 7]);
        
        expect(map(['john', 'paul', 'jean'], el => el.toUpperCase())).toEqual(['JOHN', 'PAUL', 'JEAN']);
    });
});

