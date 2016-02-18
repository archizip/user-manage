var express    = require('express');
var app = express();
var router = express.Router();           
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/users');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('port', process.env.PORT || 3000)
var port = app.get('port');


// check user data
app.post("/api/login", function(req, res){
    db.get("SELECT * FROM users WHERE username = ?",, function(err, user){
      //
    });
});

// post user data
app.post("/api/signup", function(req, res){
    db.serialize(function(){
        db.run("INSERT INTO users(username, name, password, auth_token) VALUES (?, ?, ?, ?)", ,function(err, rows){
            //
        });
    });
});

// delete account
app.post("/api/auth/delete", function(req, res){
    db.run("DELETE FROM users WHERE id = ? ",, function(err, rows){
      //
    });
});

app.use('/', router);

app.listen(port);
console.log('Listen port:' + port);