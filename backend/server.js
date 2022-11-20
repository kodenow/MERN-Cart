const express = require("express");
const mongoose = require("mongoose");
const cartRoutes = require("./routes/cart");

const app = express();
/* 
adding middleware,it's a fancy name for us getting a request 
from the server and sending a response.
these functions will fire on every request that comes in
*/
app.use(express.json()); //this looks if the request has some body and it passes it to the req object
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); //using next so it can go to the next middlewares you defined examples: router.get("/"...)
});

app.use("/cart", cartRoutes);

// app.get("/", (req, res) => {
//   res.json({ msg: "welcome" });
// });

mongoose
  .connect(
    "mongodb+srv://admin:admin@mernapp.ggpwbhl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("listening port", 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
