const db = require('./boostrap/db');
const Produkt = require('./models/produkt');
 db.initDB();

 Produkt.createNew("ime":"String",
    "proizvoditel": "String",
    "cena" : 80,
    "tezina": 80,
    "parcinja": 80 
 })
.then(() => {
    return Produkt.remove("5e42c2e8098a4018f8887e64");
})
.then(()=>{
    return Produkt.readAll();

})
.then(()=>{
    console.log(data);

})
.catch(err =>{
    console.log(err);
});



















