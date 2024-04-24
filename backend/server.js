const express = require("express");
const user = require("./Models/UserModel");
const mongoose = require("mongoose");
const cors = require("cors");
const data = require("./data.js");

const app = express();

//app.use(cors);

app.get("/api/something", (req, res) => {
  res.json(data);
});

app.listen(3200, () => console.log("Listening  at port 3200 "));

/*

*********** Mongo Db Server  and their Routes ******************


const something =
  "mongodb+srv://amarvirgill06:Ammygill2406@usercluster.1c8dt3k.mongodb.net/userCollection?retryWrites=true&w=majority&appName=userCluster";

mongoose
  .connect(something)
  .then(() => app.listen(5000, () => console.log("Server is connected to DB")))
  .catch(() => console.log("something Happened"));

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
