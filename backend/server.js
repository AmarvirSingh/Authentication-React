const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data.js");
const User = require("./Models/UserModel");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const something =
  "mongodb+srv://amarvirgill06:Ammygill2406@usercluster.1c8dt3k.mongodb.net/userCollection?retryWrites=true&w=majority&appName=userCluster";

mongoose
  .connect(something)
  .then(() => app.listen(3200, () => console.log("Server is connected to DB")))
  .catch(() => console.log("something Happened"));

app.get("/allusers", (req, res) => {
  User.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.post("/add", (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  });

  newUser
    .save()
    .then((result) => console.log("added succesfully"))
    .catch((err) => console.log(err));

  console.log(req.body);
});

/*

*********** Mongo Db Server  and their Routes ******************



app.get("/addData", (req, res) => {
  const newUser = new user({
    name: "Amarvir Singh",
    email: "amarvir@gmail.com",
    age: 25,
  });
  newUser
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/getOne", (req, res) => {
  user
    .findOne({ name: "Amarvir Singh" })
    .then((result) => res.send(result))
    .catch((err) => {
      res.send(err);
    });
});
*/
