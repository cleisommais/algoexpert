/**
 * Time: O(n) | Space: O(1)
 * @param {Number[]} array
 * @param {Number} toMove
 * @returns {Number[]}
 */
function moveElementToEnd(array = [], toMove = 0) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === toMove) {
            let next = 1;
            while (next < array.length) {
                if (array[i + next] !== toMove && array[i + next]) {
                    const temp = array[i + next];
                    array[i + next] = array[i];
                    array[i] = temp;
                    break;
                } else {
                    next++;
                }
            }
        }
    }
    return array;
}

function _swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
