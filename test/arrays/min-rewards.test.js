const program = require('../../src/arrays/min-rewards');
const chai = require('chai');

it('Arrays - Min Rewards', function () {
    chai.expect(program.minRewards([10, 8, 6, 4, 2, 3, 5, 7, 1])).to.deep.equal(
        25
    );
    chai.expect(program.minRewards([1, 2, 3, 4])).to.deep.equal(10);
    chai.expect(program.minRewards([4, 3, 2, 1])).to.deep.equal(10);
});

/*
    Assumptions to test 
    
*/
