/**
 * Time: O(nLog(n)) + O(nLog(m)) | Space: O(1)
 * @param {Number[]} arrayOne
 * @param {Number[]} arrayTwo
 * @returns {Number[]}
 */
function smallestDifference(arrayOne = [], arrayTwo = []) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let p1 = 0,
        p2 = 0;
    const smallest = new Array(2).fill(Infinity);
    while (p1 <= arrayOne.length - 1 && p2 <= arrayTwo.length - 1) {
        let currentSmallest = Math.abs(smallest[0] - smallest[1]);
        if (isNaN(currentSmallest)) {
            currentSmallest = Infinity;
        }
        const newSmallest = Math.abs(arrayOne[p1] - arrayTwo[p2]);
        if (newSmallest < currentSmallest) {
            smallest[0] = arrayOne[p1];
            smallest[1] = arrayTwo[p2];
        }
        if (arrayOne[p1] <= arrayTwo[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return smallest;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
