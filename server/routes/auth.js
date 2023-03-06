const express = require("express");
const User = require("../models/user");
// const User = require("../models/user");
 const bcryptjs = require("bcryptjs");
 const authRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const auth = require("../middlewares/auth");



// SIGN UP
authRouter.post('/api/signup', async(req, res) => {
    try {
         //get data from the client
   const {name, email, password} = req.body;


   const existingUser = await User.findOne({email});
   if(existingUser){
     return res
     .status(400)
     .json({msg: 'User with this email already exist'})
   }

   const hashedPassword = await bcryptjs.hash(password, 8);
 
   let user = new User({
 email,
 password: hashedPassword,
 name,
   })
 
   user = await user.save();
   res.json(user);
    } catch (e) {
      res.status(500).json({error: e.message});  
    }
   
    //post data to database

    //return data to the user
})


module.exports = authRouter;
