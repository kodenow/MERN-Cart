const express = require("express");
const {
  getCart,
  addToCart,
  //   removeCartItem,
  //   updateCart,
} = require("../controllers/CartController");

const router = express.Router();

// setting up the middleware

router.get("/:cartId", getCart);

router.post("/:cartId", addToCart);

// router.delete("/:id/:productId", updateCart);

// router.patch("/:id/:productId", removeCartItem);

module.exports = router;
