/** Module for handling users */
const express = require("express");
const cors = require("cors");

// Define route and middlewares
const middleware = require('../middleware/functions');
const users = express.Router();
users.use(cors());
users.use(express.json());

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    // Arbitrarily defined fields for user
    this.requiredFields = () => {
      return ["username", "password"];
    };
  }
}

// Fake database which we will be interacting with, key is the username
let fakeUsers = {
  jwong10: {
    username: "jwong10",
    password: "jwong10",
  },
  frey: {
    username: "frey",
    password: "frey",
  },
};

users.get("/", (req, res) => {
  let userDB = fakeUsers;
  res.status(200).json(userDB);
});

// TODO: Integrate with Error Handler
users.get("/:user_id", (req, res, next) => {
  let userDB = fakeUsers;
  const user = req.params.user_id;
  if (userDB[user]) {
    res.status(200).json(userDB[user]);
  } else {
    throw Error("User not found");
  }
},
  middleware.handleErrors
);

// TODO: add POST (Create) route with json input validation middleware
users.post("/", middleware.validateSchema(User), (req, res) => {
  // console.log(req.body);
  // res.send("Sucess");
  const body = req.body;

  if (body.username == undefined && body.password == undefined) {
    return res.json({
      msg: "Username and Password not defined",
      data: {}
    });
  }
  exist = fakeUsers[body.username] !== undefined

  if (exist){
    return res.json({msg: "Error: Username already exists", data: {} });
  }

  const user = {
    username: body.username,
    password: body.password
    }

  fakeUsers
  return res.json({msg: 'Account created!', data: user});

})

// Export Route
module.exports = users;
