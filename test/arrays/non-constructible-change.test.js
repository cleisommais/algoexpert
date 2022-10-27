const program = require('../../src/arrays/non-constructible-change');
const chai = require('chai');

it('Arrays - Non-Constructible Change', function () {
    const input = [5, 7, 1, 1, 2, 3, 22];
    const expected = 20;
    const actual = program.nonConstructibleChange(input);
    chai.expect(actual).to.deep.equal(expected);
});
