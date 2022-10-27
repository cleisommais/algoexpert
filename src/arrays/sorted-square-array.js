/**
 * Time: O(n) | Space: O(n)
 * @param {Number[]} array
 * @returns {Number[]}
 */
function sortedSquaredArray(array = []) {
    const sortedArray = new Array(array.length).fill(0);
    let p1 = 0,
        p2 = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        const squaredP1 = Math.pow(array[p1], 2);
        const squaredP2 = Math.pow(array[p2], 2);
        if (squaredP1 > squaredP2) {
            sortedArray[i] = squaredP1;
            p1++;
        } else {
            sortedArray[i] = squaredP2;
            p2--;
        }
    }
    return sortedArray;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
