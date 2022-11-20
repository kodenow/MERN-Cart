const CartModel = require("../models/Cart");
const mongoose = require("mongoose");

const getCart = async (req, res) => {
  const { cartId } = req.params;

  const cart = await CartModel.getCart(cartId);
  if (!cart) {
    return res.status(400).json({ error: "No such workout ID" });
  }
  res.status(200).json(cart);
};

const addToCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    // let cart = await CartModel.getCart(cartId);
    // cart = cart.toJSON();

    const data = prepareData(req.body);
    const basket = await CartModel.createOrUpdate(cartId, data);
    console.log(basket);

    res.status(200).json(basket);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

function prepareData(body) {
  /*here we use destructuring so we don't have to query 
  if whether or not an item exist in the cart object. We
  just replace the entire items object field */
  let product = {
    ...body,
  };

  return product;
}

function isEmptyCart(cart) {
  // array does not exist, is not an array, or is empty
  // ⇒ do not attempt to process array
  if (!Array.isArray(cart.items) || !cart.length) {
    return true;
  }
  return false;
}

module.exports = {
  getCart,
  addToCart,
};
