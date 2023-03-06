const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        required: true,
        trim: true,
        type: String,
    },
     email:{
        required: true,
        trim: true,
        type: String,
        validate: {
            validator: (value) =>
{
 const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
return value.match(regex);   
},
message: 'Please enter a valid email address',  

}
    }, 
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) =>
{
return value.length>6;   
},
message: 'password is too short',  

}
    },
    address: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'user',
    },
    //card
});

const User = mongoose.model('User', userSchema);
module.exports = User;