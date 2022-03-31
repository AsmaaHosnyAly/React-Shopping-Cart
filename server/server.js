const express = require("express");
const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use("/", router);
app.use(bodyParser.json());
const connectionString = "mongodb://localhost/react-shopping-cart";
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connection done"))
  .catch((err) => console.log(err));

app.listen(3001, () => {
  console.log("running on port 3001");
});
