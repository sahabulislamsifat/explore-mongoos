// mongodb+srv://<db_username>:<db_password>@cluster0.vu9lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://<db_username>:<db_password>@cluster0.vu9lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const mongoos = require("mongoose");
const User = require("./model/userModel");

const app = express();

mongoos
  .connect(
    "mongodb+srv://explore-mongoos:R8V03rUGIVXyp7Jp@cluster0.vu9lo.mongodb.net/mongooscrud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => console.log("data base connected"))
  .catch((error) => console.log(error));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/explore", (req, res) => {
  res.send(" Hello I am From Server......");
});

app.post("/users", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.end("user created..");
  } catch (error) {
    console.log(error);
    res.end(error);
  }
});
app.get("/users", async (req, res) => {
  try {
    const result = await User.find({});
    res.json(result);
  } catch (error) {
    console.log(error);
    res.end(error);
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(error);
    res.end(error);
  }
});
app.put("/users/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.status(200);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(error);
    res.end(error);
  }
});

app.listen(5000, () => {
  console.log(`server running on port: ${5000}`);
});
