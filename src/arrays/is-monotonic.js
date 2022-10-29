/**
 * Time: O(n) | Space: O(1)
 * @param {Number[]} array
 * @returns {Boolean}
 */
function isMonotonic(array = []) {
    if (array.length === 0 || array.length === 1) {
        return true;
    }
    let monotonic = true;
    let direction = 'increasing';
    if (array[0] >= array[array.length - 1]) {
        direction = 'decreasing';
    }
    for (let i = 0; i < array.length - 1; i++) {
        if (direction === 'increasing' && array[i] <= array[i + 1]) {
            continue;
        }
        if (direction === 'decreasing' && array[i] >= array[i + 1]) {
            continue;
        }
        monotonic = false;
        break;
    }
    return monotonic;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
