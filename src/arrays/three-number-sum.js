/**
 * Time: O(n²) | Space: O(n)
 * @param {Number[]} array
 * @param {Number} targetSum
 * @returns {Number[][]}
 */
function threeNumberSum(array = [], targetSum = 0) {
    array.sort((a, b) => a - b);
    const response = new Array();
    for (let i = 0; i < array.length; i++) {
        let p1 = i + 1,
            p2 = array.length - 1;
        while (p1 <= p2) {
            if (array[i] + array[p1] + array[p2] === targetSum) {
                if (
                    array[i] !== array[p1] &&
                    array[i] !== array[p2] &&
                    array[p1] !== array[p2]
                ) {
                    response.push([array[i], array[p1], array[p2]]);
                }
                p1++;
                p2--;
            } else if (array[i] + array[p1] + array[p2] < targetSum) {
                p1++;
            } else {
                p2--;
            }
        }
    }
    return response;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
