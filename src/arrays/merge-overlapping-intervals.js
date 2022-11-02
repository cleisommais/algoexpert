/**
 * Time: O(nLog(n)) | Space: O(n)
 * @param {Number[][]} array
 * @returns {Number[][]}
 */
function mergeOverlappingIntervals(array = [[]]) {
    const mergedIntervals = new Array();
    array.sort((a, b) => a[0] - b[0]);
    let currentInterval = array[0];
    mergedIntervals.push(currentInterval);
    for (let i = 1; i < array.length; i++) {
        const nextInterval = array[i];
        if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
