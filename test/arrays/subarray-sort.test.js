const program = require('../../src/arrays/subarray-sort');
const chai = require('chai');

it('Arrays - Subarray Sort', function () {
    chai.expect(program.subarraySort([1, 2, 8, 4, 5])).to.deep.equal([2, 4]);
    chai.expect(program.subarraySort([1, 2])).to.deep.equal([-1, -1]);
    chai.expect(
        program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
    ).to.deep.equal([3, 9]);
    chai.expect(
        program.subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19])
    ).to.deep.equal([4, 9]);
});
