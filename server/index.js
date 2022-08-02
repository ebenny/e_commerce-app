// import express
const express = require('express');
const PORT = 3000;

//initializing express
const app = express();

//CREATE AN API


app.listen(PORT, '0.0.0.0',  () => {
console.log(`connected at port  ${PORT}`);
})
