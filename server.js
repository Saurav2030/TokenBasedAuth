const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("error", (err) => {
  console.log(`Error -> : ${err.message}`);
});

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running : PORT ${server.address().port}`);
});
