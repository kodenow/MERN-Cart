var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    discount_percentage: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    sub_total: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

async function getCart(cartId) {
  return await Cart.findOne({ user_id: parseInt(cartId) });
}

const createOrUpdate = async (cartId, data) => {
  var query = { user_id: cartId },
    update = { ...data },
    options = { upsert: true, new: true, setDefaultsOnInsert: true }; //this options allows to create new document if the query didn't match anything

  // Find the document, create one if it doesn't exist
  return await Cart.findOneAndUpdate(
    query,
    update,
    options,
    function (error, result) {
      if (error) return error;
      // return error do something with the document
    }
  ).clone();
};

module.exports = {
  Cart,
  getCart,
  createOrUpdate,
};
