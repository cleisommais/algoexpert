const program = require('../../src/arrays/merge-overlapping-intervals');
const chai = require('chai');

it('Arrays - Merge Overlapping Intervals', function () {
    chai.expect(
        program.mergeOverlappingIntervals([
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9],
            [1, 10],
        ])
    ).to.deep.equal([[1, 10]]);
});
