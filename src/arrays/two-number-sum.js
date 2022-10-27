/**
 * Time: O(n) | Space O(n)
 * @param {Number[]} array
 * @param {Number} targetSum
 * @returns {Number[]}
 */
function twoNumberSum(array = [], targetSum = 0) {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
        const diff = targetSum - array[i];
        if (set.has(diff)) {
            return [array[i], diff];
        }
        set.add(array[i]);
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
