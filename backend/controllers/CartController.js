const CartModel = require("../models/Cart");
const ProductModel = require("../models/Product");
const mongoose = require("mongoose");

const getCarts = async (req, res) => {
  const carts = await CartModel.find({});
  res.status(200).json(carts);
};

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

    // const cart = await ProductModel.create({ sku });
    res.status(200).json({ ite: "emrke" });
    // res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

function prepareData(body) {
  let product = {
    ...body, //here we use destructring so we don't have to query if whether or not an item exist in the cart object
  };

  return product;
}

function inCart(cart, sku) {
  let found = false;

  cart.items.forEach((line) => {
    if (line.id === sku) {
      found = true;
    }
  });
  return found;
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
  getCarts,
  getCart,
  addToCart,
};
