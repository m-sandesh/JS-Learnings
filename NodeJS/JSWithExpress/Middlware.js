let express = require('express');

let app = express();

app.set('view engine', 'ejs');

app.listen(3000);

//Routing Using EJS
app.get('/', function (req, res) {
    res.render('home.ejs');
});
//Only This cannot render style.css and other static files required. So middleware is used.
//Using middle ware (to be used after app.listen())
//Below is hard coded.
app.use('/assets', function (req, res, next) {
    console.log(req.url);   //logs url only after '/assets/' as it is only a middleware. Here comes the static files to be loaded.
    next(); //Breaks out of this function.
});
//Below is express way
app.use('/assets', express.static('assets'));   //route will automatically be loaded and loads assets folder.
