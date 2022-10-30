/**
 * Time: O(n) | Space: O(n)
 * @param {Number[][]} array
 * @returns {Number[]}
 */
function spiralTraverse(array = [[]]) {
    const list = new Array();
    let rowStart = 0,
        colStart = 0,
        rowEnd = array.length - 1,
        colEnd = array[0].length - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        //Push the top border elements to the list
        for (let col = colStart; col <= colEnd; col++) {
            list.push(array[rowStart][col]);
        }
        //Push the left border elements to the list
        for (let row = rowStart + 1; row <= rowEnd; row++) {
            list.push(array[row][colEnd]);
        }
        //Push the bottom border elements to the list
        for (let col = colEnd - 1; col >= colStart; col--) {
            //If row end is equals to row start, it means, you already added that element before
            if (rowStart === rowEnd) {
                break;
            }
            list.push(array[rowEnd][col]);
        }
        //Push the right border elements to the list
        for (let row = rowEnd - 1; row > rowStart; row--) {
            //If col end is equals to col start, it means, you already added that element before
            if (colStart === colEnd) {
                break;
            }
            list.push(array[row][colStart]);
        }
        //Go to inner cycle elements, follow the spiral flow
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }
    return list;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
