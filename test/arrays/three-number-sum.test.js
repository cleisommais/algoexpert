const program = require('../../src/arrays/three-number-sum');
const chai = require('chai');

it('Arrays - Three Number Sum', function () {
    chai.expect(
        program.threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
    ).to.deep.equal([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
    ]);
});
