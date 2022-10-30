/**
 * Time: O(n) | Space: O(1)
 * @param {Number[]} array
 * @returns {Number}
 */
function longestPeak(array = []) {
    if (array.length < 3) {
        return 0;
    }
    const limit = array.length - 1;
    let i = 1;
    let max = 0;
    while (i < limit) {
        const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
        if (!isPeak) {
            i++;
            continue;
        }
        let p1 = i - 2;
        while (p1 >= 0 && array[p1] < array[p1 + 1]) {
            p1--;
        }
        let p2 = i + 2;
        while (p2 < array.length && array[p2] < array[p2 - 1]) {
            p2++;
        }
        const currentPeak = p2 - p1 - 1;
        max = Math.max(max, currentPeak);
        i = p2;
    }
    return max;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;
