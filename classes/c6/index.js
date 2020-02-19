const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const db = require('./boostrap/db');
// const users = require('./handlers/users');
const auth = require('./handlers/auth');
db.initDB();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(express.static('styles'));

app.get('/', auth.viewLogin);
app.post('/', auth.apiLogin);
app.get('/register', auth.viewRegister);
app.post('/register', auth.apiRegister);
// app.get('/users ', users.viiewUsersGetAll);


app.listen(8080, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Started on port 8080');
});
