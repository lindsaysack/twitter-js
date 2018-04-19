const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
const tweetbank = require('./tweetBank');

app.use(volleyball);
// app.use((req, res, next) => {
//     console.log(req.method, req.path, res.statusCode);
//     next();
// })
// app.use('/news/', (req, res, next) => {
//     console.log('news special log');
//     next();
// })
const locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views',  { noCache: true }); // point nunjucks to the proper directory for templates
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });
app.get('/', (req, res, next) => {
    // res.send("server listening"); 
    res.render('index', locals);
})
app.get('/news', (req, res, next) => {
    res.send("found the news!")
})



app.listen(3000);