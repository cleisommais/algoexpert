const program = require('../../src/arrays/first-duplicate-value');
const chai = require('chai');

it('Arrays - First Duplicate Value', function () {
    chai.expect(
        program.firstDuplicateValue([2, 1, 5, 2, 3, 3, 4])
    ).to.deep.equal(2);
    chai.expect(
        program.firstDuplicateValue([2, 1, 5, 3, 3, 2, 4])
    ).to.deep.equal(3);
    chai.expect(program.firstDuplicateValue([1, 2, 3, 4])).to.deep.equal(-1);
});
