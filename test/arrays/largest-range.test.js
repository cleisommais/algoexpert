const program = require('../../src/arrays/largest-range');
const chai = require('chai');

it('Arrays - Largest Range', function () {
    chai.expect(
        program.largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6])
    ).to.deep.equal([0, 7]);
    chai.expect(program.largestRange([4, 2, 1, 3])).to.deep.equal([1, 4]);
    chai.expect(program.largestRange([1, 2])).to.deep.equal([1, 2]);
    chai.expect(program.largestRange([1])).to.deep.equal([1, 1]);
    chai.expect(
        program.largestRange([8, 4, 2, 10, 3, 6, 7, 9, 1])
    ).to.deep.equal([6, 10]);
});
