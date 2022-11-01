const program = require('../../src/arrays/array-of-products');
const chai = require('chai');

it('Arrays - Array Of Products', function () {
    const array = [5, 1, 4, 2];
    const expected = [8, 40, 10, 20];
    const actual = program.arrayOfProducts(array);
    chai.expect(actual).to.deep.equal(expected);
});
