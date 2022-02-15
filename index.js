const express = require("express");

const app = express();

// importing database
require('./server/database/connection')

// importing dotenv file 
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{
  console.log(`server is running on http://localhost:${PORT}`);
})
