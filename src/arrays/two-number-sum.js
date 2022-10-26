/**
 * Time: O(n) | Space O(n)
 * @param {Number[]} array
 * @param {Number} targetSum
 * @returns
 */
function twoNumberSum(array = [], targetSum = 0) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        const diff = targetSum - array[i];
        map.set(diff, array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (map.has(array[i])) {
            if (map.get(array[i]) !== array[i]) {
                return [map.get(array[i]), array[i]];
            }
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
