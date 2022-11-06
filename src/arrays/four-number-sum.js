/**
 * Time: O(n²) | Space: O(n²)
 * @param {Number[]} array
 * @param {Number} targetSum
 * @returns {Number[][]}
 */
function fourNumberSum(array = [], targetSum = 0) {
    const quadruplets = new Array();
    const sumMap = new Map();
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];
            const difference = targetSum - currentSum;
            if (sumMap.has(difference)) {
                for (const pair of sumMap.get(difference)) {
                    quadruplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }
        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k];
            if (!sumMap.has(currentSum)) {
                sumMap.set(currentSum, [[array[k], array[i]]]);
            } else {
                const pair = sumMap.get(currentSum);
                pair.push([array[k], array[i]]);
                sumMap.set(currentSum, pair);
            }
        }
    }
    return quadruplets.length > 0 ? quadruplets : [];
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
