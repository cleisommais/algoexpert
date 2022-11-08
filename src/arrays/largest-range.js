/**
 * Time O(n) | Space O(n)
 * @param {Number[]} array
 * @returns {Number[]}
 */
function largestRange(array = []) {
    const map = new Map();
    let bestRange = [];
    let longestLength = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        map.set(element, true);
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!map.get(element)) {
            continue;
        }
        map.set(element, false);
        let currentLength = 1;
        let left = element - 1;
        let right = element + 1;
        while (map.get(left)) {
            map.set(left, false);
            currentLength++;
            left--;
        }
        while (map.get(right)) {
            map.set(right, false);
            currentLength++;
            right++;
        }
        if (currentLength > longestLength) {
            longestLength = currentLength;
            bestRange = [left + 1, right - 1];
        }
    }
    return bestRange;
}

// Do not edit the line below.
exports.largestRange = largestRange;
