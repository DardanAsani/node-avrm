var bcrypt = require('bcryptjs');
var user = require('../models/users')
const viewLogin = (req, res) => {
    res.render('login');

}
const apiLogin = (req, res) => {
    if (req.body.email !== undefined && req.body.email.length > 0 &&
        req.body.password !== undefined && req.body.password.lenght > 0
    ) {
        user.getByEmail(req.body.email)
        .then(data => {
            if (bcrypt.compareSync(req.body.password, data.password)) {
                res.redirect('/dashboard');

            }
            else {
                res.redirect('/?err=1')
            }
        })
        .catch(err => {
            res.redirect('/?err=2');
        });
    }
    else {
        res.redirect('/?err=3');
    }

}


const viewRegister = (req, res) => {
    res.render('register');
}
const apiRegister = (req, res) => {

    if (
        req.body.first_name !== undefined && req.body.first_name.length !== '' > 0 &&
        req.body.last_name !== undefined && req.body.last_name.length !== '' > 0 &&
        req.body.email !== undefined && req.body.email.length !== '' > 0 &&
        req.body.password !== undefined && req.body.password.length !== '' > 0 &&
        req.body.password2 !== undefined && req.body.password2.length !== '' > 0 &&
        req.body.password2 == req.body.password

    ) {
        var salt = bcrypt.hashSync(
            req.body.password,
            salt.genSaltSynv(10)
        );
        user.createNew({
            firt_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash

        })
            .then(() => {
                res.status(201).send('created'

                );

            })
            .catch(err => {
                console.log(err);
                // res.status(500).send('internal server error');
                res.redirect('/resgister2?err=');
            });
    }
    else {
        res.redirect('/resgister2?err=');
    }
}


module.exports = {
    apiLogin,
    viewRegister,
    apiRegister,
    viewLogin
}