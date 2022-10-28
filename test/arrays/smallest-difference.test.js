const program = require('../../src/arrays/smallest-difference');
const chai = require('chai');

it('Arrays - Smallest Difference', function () {
    chai.expect(
        program.smallestDifference(
            [-1, 5, 10, 20, 28, 3],
            [26, 134, 135, 15, 17]
        )
    ).to.deep.equal([28, 26]);
});
