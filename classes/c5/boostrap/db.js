const mongoose = require("mongoose");
const cstring ='mongodb+srv://daardii:vesper003@cluster0-lisjj.mongodb.net/prodavnica?retryWrites=true&w=majority';
const initDB=()=>
{
    mongoose.connect(cstring,{useNewUrlParser:true , useUnifiedTopology:true}, (err) =>{
        if(err){
            console.log('ccccccc');
            return;
        }
    });
};
module.exports={
    initDB
};