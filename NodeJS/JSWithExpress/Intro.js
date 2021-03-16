let express = require('express');

let app = express();    //setting the express gaining access to all express methods

app.set('view engine','ejs');   //setting template/view engine to let express know about it.

app.listen(3000);   //server listening at port number.

// Route Methods:   (Doesnt require content headers as express can automatically decide what content is reponded.)
// Get  (Usual URL routing)
// Post
// Delete
// Put

//Get Method
app.get('/', function (req, res) {
    res.send('This is sample of get method.');
});

app.get('/homepage', function (req, res) {
    res.send('This is the homepage.');
});

//Routing Parmeters (For dynamic page routing)
app.get('/profile/:id', function (req, res) {   //set a parameter using ':' symbol
    res.send('You requested profile of ' + req.params.id);  //access the parameter from request url using params function.
});

//Routing html page
app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/views/index.html', console.error());
});

//Template engines

