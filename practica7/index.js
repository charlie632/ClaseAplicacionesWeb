var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
    
})

app.post('/action', (req, res) => {
    let action = req.body.action;
    console.log(action);
    res.sendStatus(200);
})

app.listen(3001, () => console.log("App listening on: 3001"))