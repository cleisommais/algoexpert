/**
 * Time: O(n) | Space: O(n)
 * @param {Number[][]} array
 * @returns {Number[]}
 */
function spiralTraverse(array = [[]]) {
    const list = new Array();
    _spiralFill(list, array, 0, array.length - 1, 0, array[0].length - 1);
    return list;
}

/**
 *
 * @param {Number[]} list
 * @param {Number[][]} array
 * @param {Number} rowStart
 * @param {Number} rowEnd
 * @param {Number} colStart
 * @param {Number} colEnd
 */
function _spiralFill(
    list = [],
    array = [[]],
    rowStart = 0,
    rowEnd = 0,
    colStart = 0,
    colEnd = 0
) {
    if (rowStart > rowEnd || colStart > colEnd) {
        return;
    }
    for (let col = colStart; col <= colEnd; col++) {
        list.push(array[rowStart][col]);
    }
    for (let row = rowStart + 1; row <= rowEnd; row++) {
        list.push(array[row][colEnd]);
    }
    for (let col = colEnd - 1; col >= colStart; col--) {
        if (rowStart === rowEnd) {
            break;
        }
        list.push(array[rowEnd][col]);
    }
    for (let row = rowEnd - 1; row >= rowStart + 1; row--) {
        if (colStart === colEnd) {
            break;
        }
        list.push(array[row][colStart]);
    }
    _spiralFill(
        list,
        array,
        rowStart + 1,
        rowEnd - 1,
        colStart + 1,
        colEnd - 1
    );
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
