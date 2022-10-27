const program = require('../../src/arrays/tournament-winner');
const chai = require('chai');

it('Arrays - Tournament Winner', function () {
    chai.expect(
        program.tournamentWinner(
            [
                ['HTML', 'C#'],
                ['C#', 'Python'],
                ['Python', 'HTML'],
            ],
            [0, 0, 1]
        )
    ).to.deep.equal('Python');
    chai.expect(
        program.tournamentWinner(
            [
                ['HTML', 'Java'],
                ['Java', 'Python'],
                ['Python', 'HTML'],
            ],
            [0, 1, 1]
        )
    ).to.deep.equal('Java');
});
