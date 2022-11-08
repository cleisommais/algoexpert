/**
 * Time O(n) | Space O(1)
 * @param {Number[]} array
 * @returns {Number[]}
 */
function subarraySort(array = []) {
    let p1 = -1;
    let p2 = -1;
    let min = Infinity;
    let max = -Infinity;
    //To find the min and max from a sub array
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            min = Math.min(min, array[i + 1]);
            max = Math.max(max, array[i]);
        }
    }
    //once with the min, we can identify where start the subarray unordered
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (min < element) {
            p1 = i;
            break;
        }
    }
    //like the last loop, but now to find the end of the subarray using the max number
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (max >= element || (max >= element && i === array.length - 1)) {
            p2 = i;
        }
    }
    return [p1, p2];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;
