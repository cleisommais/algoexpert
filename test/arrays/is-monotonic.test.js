const program = require('../../src/arrays/is-monotonic');
const chai = require('chai');

it('Arrays - Monotonic Array', function () {
    chai.expect(
        program.isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])
    ).to.deep.equal(true);
    chai.expect(program.isMonotonic([1, 2, 2, 3])).to.deep.equal(true);
    chai.expect(
        program.isMonotonic([-1, -5, -10, -1100, -1100, -999, -1102, -9001])
    ).to.deep.equal(false);
    chai.expect(program.isMonotonic([1, 3, 2])).to.deep.equal(false);
});
