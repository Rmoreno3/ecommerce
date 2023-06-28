/**
 * This function calculate Total Price of a new order
 * @param {Array} products cartProducts Array of Object
 * @returns {Number} totalPrice
 */

export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
