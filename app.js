const express = require( 'express' );
const volleyball = require('volleyball');
const app = express(); // creates an instance of an express application

app.use(volleyball);
// app.use((req, res, next) => {
//     console.log(req.method, req.path, res.statusCode);
//     next();
// })
// app.use('/news/', (req, res, next) => {
//     console.log('news special log');
//     next();asdfsd
// })
app.get('/', (req, res, next) => {
    res.send("server listening"); 
})
app.get('/news', (req, res, next) => {
    res.send("found the news!")
})

app.listen(3000);