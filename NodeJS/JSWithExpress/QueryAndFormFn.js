let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'ejs');
app.listen(3000);

//Setting middleware to access files
app.use('/assets', express.static('assets'));

//Setting middleware to access POST method urls
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.render('home.ejs');
});

//getting query strings from url
app.get('/contact', function (req, res) {
    res.render('contact', { qs: req.query });   //binding all query strings in 'qs' as object.
});

//Accessing POST method
// urlencodedParser gets fired if submit is clicked which is middleware that brings all data objects to req.body
app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);  //brings all data from POST to req.body
    res.render('contact-success', { data: req.body });
});