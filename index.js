// mongodb+srv://<db_username>:<db_password>@cluster0.vu9lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://<db_username>:<db_password>@cluster0.vu9lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const mongoos = require("mongoose");

const app = express();

mongoos
  .connect(
    "mongodb+srv://explore-mongoos:R8V03rUGIVXyp7Jp@cluster0.vu9lo.mongodb.net/mongooscrud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => console.log("data base connected"))
  .catch((error) => console.log(error));

app.get("/explore", (req, res) => {
  res.send(" Hello I am From Server......");
});

app.listen(5000, () => {
  console.log(`server running on port: ${5000}`);
});
