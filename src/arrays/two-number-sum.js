/**
 * Time: O(nLog(n)) | Space O(1)
 * @param {Number[]} array
 * @param {Number} targetSum
 * @returns {Number[]}
 */
function twoNumberSum(array = [], targetSum = 0) {
    let p1 = 0,
        p2 = array.length - 1;
    while (p1 < p2) {
        const total = array[p1] + array[p2];
        if (total > targetSum) {
            p2--;
        } else if (total < targetSum) {
            p1++;
        } else {
            return [array[p1], array[p2]];
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
