// const express= require('express')
// const app = express()
// const mongoDB= require('./db')
// mongoDB();
// const port =5000
// app.get('/',(req,res)=>{
//   res.send('Hello world')
// })
// app.listen(port,()=>{
//   console.log('Example app listeing on port'+ port);
// })
const express = require('express');
const app = express();
const connectToMongoDB = require('./db'); // Import the connection function

const port = 5000;

(async () => {
  try {
    const client = await connectToMongoDB(); // Call the connection function
    // Do something with the connected client if needed

    // Define your routes and start the server
    app.get('/', (req, res) => {
      res.send('Hello world');
    });

    app.listen(port, () => {
      console.log('Example app listening on port ' + port);
    });
  } catch (err) {
    console.error('Error starting the server: ', err);
    process.exit(1); // Exit the process with an error code
  }
})();
