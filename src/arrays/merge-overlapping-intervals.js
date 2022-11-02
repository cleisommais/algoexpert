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
    for (const nextInterval of array) {
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;
        if (currentIntervalEnd >= nextIntervalStart) {
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        } else {
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
