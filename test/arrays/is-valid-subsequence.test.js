const program = require('../../src/arrays/is-valid-subsequence');
const chai = require('chai');

it('Validate Subsequence', function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    chai.expect(program.isValidSubsequence(array, sequence)).to.deep.equal(
        true
    );
    chai.expect(
        program.isValidSubsequence(array, [22, 1, 6, -1, 10])
    ).to.deep.equal(false);
});
