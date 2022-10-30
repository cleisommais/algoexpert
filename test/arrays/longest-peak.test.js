const program = require('../../src/arrays/longest-peak');
const chai = require('chai');

it('Arrays - Longest Peak', function () {
    const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
    const expected = 6;
    chai.expect(program.longestPeak(array)).to.deep.equal(expected);
});
