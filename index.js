// const express = require('express')
// require('dotenv').config()
// const app = require("./app");

// const app = express()
// const PORT = process.env.PORT
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

require('dotenv').config()
const PORT = process.env.PORT

server.listen( PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





// app.get('/', (req,res)  =>{
//     res.send('Hello world')
//     res.end()
// })



// app.listen(PORT , () =>{
//     console.log(`Server running on port localhost:${PORT}`)
// })