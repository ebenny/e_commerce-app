const express = require("express");
const User = require("../models/user");
// const User = require("../models/user");
// const bcryptjs = require("bcryptjs");
 const authRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const auth = require("../middlewares/auth");

authRouter.post('/api/signup', async(req, res) => {
    //get data from the client
   const {name, email, password} = req.body;


  const existingUser = await User.findOne({email});
  if(existingUser){
    return res.status(400).json({msg: 'User with ths email already exist'})
  }

  let user = new User({
email,
password,
name,
  })

  user = await user.save();
  res.json(user);
    //post data to database

    //return data to the user
})


module.exports = authRouter;