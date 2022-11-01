/**
 * Time: O(n) | Space: O(1)
 * @param {Number[]} array
 * @returns {Number}
 */
function firstDuplicateValue(array = []) {
    for (const element of array) {
        const absValue = Math.abs(element);
        if (array[absValue - 1] < 0) {
            return absValue;
        }
        array[absValue - 1] *= -1;
    }
    return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
