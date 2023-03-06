
//Imports from packages
const express = require('express');
const mongoose = require('mongoose');

//Imports from files
const authRouter = require('./routes/auth');

//initialization
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://ebennyDev:ebennyDev22@cluster0.figun.mongodb.net/?retryWrites=true&w=majority'



//middleware
//CLIENT -> middleware-> SERVER -> CLIENT
app.use(express.json());
app.use(authRouter);

//connection
mongoose.connect(DB).then(() => {
    console.log('conection successful!');
}).catch(e => {
    console.log(e);
})

app.listen(PORT, '0.0.0.0',  () => {
console.log(`connected at port  ${PORT}`);
})

