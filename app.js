const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.get('/', (req, res, next) => {
    res.send("server listening"); 
})
app.listen(3000);