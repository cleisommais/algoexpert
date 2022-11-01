const program = require('../../src/arrays/longest-peak');
const chai = require('chai');

it('Arrays - Longest Peak', function () {
    chai.expect(
        program.longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])
    ).to.deep.equal(6);
    chai.expect(
        program.longestPeak([5, 4, 3, 2, 1, 2, 10, 12, -3, 5, 6, 7, 10])
    ).to.deep.equal(5);
});
