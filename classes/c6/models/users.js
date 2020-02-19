const mongoose = require("mongoose");
const Users = mongoose.model(
    'users',
    {
        firt_name: String,
        last_name: String,
        email: String,
        password: String
    },
    'users'
);

const readAll = () => {
    return new Promise((success, fail) => {
        User.find({}, (err, data) => {
            if (err) {

                return fail(err)
            }
            return success(data);
        });
    });
};


const createNew = (data) => {
    return new Promise((success, fail) => {
        let p = new Users(data);
        p.save((err) => {

            if (err) {

                return fail(err)
            }
            return success();
        });
    });

};
const remove = (id) => {
    return new Promise((success, fail) => {
        Users.deleteOne({ _id: id }, (err) => {
            if (err) {

                return fail(err)
            }
            return success();
        });
    });
};

const getByEmail = (email) =>{
    return new Promise((success,fail) =>{
        User.findOne({email:email}, (err,data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        })
    })
}

module.exports = {
    readAll,
    createNew,
    remove
};