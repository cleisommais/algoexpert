/**
 * Time: O(n) | Space: O(n)
 * @param {Number[]} array
 * @returns {Number[]}
 */
function arrayOfProducts(array = []) {
    const products = new Array(array.length).fill(1);
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = product;
        product *= array[i];
    }
    product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] *= product;
        product *= array[i];
    }
    return products;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
