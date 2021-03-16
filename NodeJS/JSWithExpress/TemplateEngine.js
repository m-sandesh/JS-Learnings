//This is the advance way of routing for dynamic content using template/view engine.

let express = require('express');

let app = express();

app.listen(3000);

app.set('view engine', 'ejs');
//after setting view engine in the framework, 'views' folder is to be created as it will only follow is structure.
//html pages should be have extensions '.ejs' to know js about the template its been based on.

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');  //sendFile is used for html. path is required.
});
app.get('/profile/:name', function (req, res) {
    //example api might be after database process...
    let profileData = { id: 101, age: 23, department: 'Sales', hobbies: ['Read', 'Write', 'Study', 'Eat'] };

    res.render('profile', { name: req.params.name, profile: profileData }); //copied one object into another.
    //render is used for ejs. path is not required as default folder will always be 'views'.
    //file extension is not required as view engine is set to the current used template engine.
    //url parameters as accessed only with objects. it stores the key which is to be used in ejs and the value accessed using params function.
    //api can also be sent as using it. the example above api might also be from after database process.
});