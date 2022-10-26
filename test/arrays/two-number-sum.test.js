// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require('../../src/arrays/two-number-sum');
const chai = require('chai');

it('Two Number Sum', function () {
    const output = program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
    //chai.expect(output.length === 2).to.deep.equal(true);
    //chai.expect(output.includes(11)).to.deep.equal(true);
    //chai.expect(output.includes(-1)).to.deep.equal(true);
});
