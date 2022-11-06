const program = require('../../src/arrays/four-number-sum');
const chai = require('chai');

it('Arrays - Four Number Sum', function () {
    let output = program.fourNumberSum([7, 6, 4, -1, 1, 2], 16);
    output = output.map(sortAndStringify);
    const quadruplets = [
        [7, 6, 4, -1],
        [7, 6, 1, 2],
    ];
    chai.expect(output.length === 2).to.be.true;
    for (const quadruplet of quadruplets) {
        chai.expect(output).to.include(sortAndStringify(quadruplet));
    }
});

function sortAndStringify(array) {
    return array.sort((a, b) => a - b).join(',');
}
