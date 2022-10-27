/**
 * Time: O(nlog(n)) | Space: O(1)
 * @param {Number[]} coins
 * @returns {Number}
 */
function nonConstructibleChange(coins = []) {
    coins.sort((a, b) => a - b);
    let currentChangeCreated = 0;
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
