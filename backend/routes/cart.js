const express = require("express");
const {
  getCart,
  getCarts,
  addToCart,
  //   removeCartItem,
  //   updateCart,
} = require("../controllers/CartController");

const router = express.Router();

// setting up the middleware
// router.get("/", getCart);//we don't need this, we only need the user's cart

router.get("/:cartId", getCart);
router.get("/", getCarts);

router.post("/:cartId", addToCart);

// router.delete("/:id/:productId", updateCart);

// router.patch("/:id/:productId", removeCartItem);

module.exports = router;
