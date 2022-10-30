const program = require('../../src/arrays/spiral-traverse');
const chai = require('chai');

it('Arrays - Spiral Traverse', function () {
    chai.expect(
        program.spiralTraverse([
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7],
        ])
    ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
});
