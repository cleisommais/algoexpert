/**
 * Time: O(log(n)) | Space: O(n)
 * @param {Number[]} array
 * @param {Number[]} sequence
 * @returns {Boolean}
 */
function isValidSubsequence(array = [], sequence = []) {
    let pA1 = 0,
        pA2 = array.length - 1;
    let pS1 = 0,
        pS2 = sequence.length - 1;
    let response = false;
    while (pA1 <= pA2) {
        if (array[pA1] === sequence[pS1]) {
            pA1++;
            pS1++;
        } else {
            pA1++;
        }
        if (array[pA2] === sequence[pS2]) {
            pA2--;
            pS2--;
        } else {
            pA2--;
        }
        if (pS1 > pS2) {
            response = true;
        }
    }
    return response;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
