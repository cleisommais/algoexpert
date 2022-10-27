/**
 * Time: O(n) n = competitions | Space: O(k) k = teams
 * @param {String[][]} competitions
 * @param {Number[]} results
 * @returns {String}
 */
function tournamentWinner(competitions = [[]], results = []) {
    const map = new Map();
    for (let i = 0; i < competitions.length; i++) {
        const result = results[i];
        if (result === 0) {
            const team = competitions[i][1];
            let count = map.get(team) || 0;
            map.set(team, ++count);
        } else {
            const team = competitions[i][0];
            let count = map.get(team) || 0;
            map.set(team, ++count);
        }
    }
    let winner = '',
        points = 0;
    map.forEach((value, key) => {
        if (value > points) {
            winner = key;
            points = value;
        }
    });
    return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
