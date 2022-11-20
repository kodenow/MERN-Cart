var mongoose = require("mongoose");
const DBCONNECTION =
  "mongodb+srv://admin:admin@mernapp.ggpwbhl.mongodb.net/?retryWrites=true&w=majority";

const connection = mongoose.createConnection(
  DBCONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) console.log("DB Connect");
    else console.log("Error in connection db");
  }
);

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    uuid: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

const getProduct = async (sku) => {
  return await Product.findOne({ uuid: sku });
};
//this will also automatically creates a collection for us
module.exports = {
  Product,
  getProduct,
};
