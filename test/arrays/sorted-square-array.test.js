const program = require('../../src/arrays/sorted-square-array');
const chai = require('chai');

it('Arrays - Sorted Squared Array', function () {
    chai.expect(
        program.sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
    ).to.deep.equal([1, 4, 9, 25, 36, 64, 81]);
    chai.expect(
        program.sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20])
    ).to.deep.equal([0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]);
});
