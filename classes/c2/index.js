//console.log('test');
const fs= require("fs");
fs.writeFile('data.txt','Test Test Test',(err) =>{
            if (err){
            console.log('could not write file');
            return ;
}
            console.log('successfully written to file ');
    
fs.appendFile('data.txt', 'test test', (err) => {
            if(err){
            console.log('could not append file ');
             return;
 
    }
            console.log('append executed successfully');
 fs.readFile('data.txt','utf8', (err, data) => {
             if (err) {
            console.log('the file coulnd not be read');
        }
            console.log(data);
      });
 });

});

const write =(file,content) =>{
    return new Promise((sucess,fail) =>{
        fs.writeFile(file,content,(err)=>{
            if(err){
                return fail(err);

            }
            return sucess();
        });
    });
};
write('file.text','use prommises')
.then(()=>{
    console.log('successfly wrote to file');

})
.catch(err => 
    {
        console.log('an error ocurred while wrtiting the text');
    });







    const append = (file,content) => {
        return new Promise ((success,failed) =>
        fs.appendFile(file,content,(err) =>
        {
            if (err) {
                return failed(err);

            }
            return success();

        }));
    };
    write('file.txt','use callback')
    .then(()=>{
        console.log('succes');
    })
    .catch(err =>{
        console.log('error');
    });





    const read = (file) =>{
        return new Promise ((succes,fail)=>{
            fs.readFile(file,'utf9',(err,data)=>{
                if(err){
                    return fail(err);

                }
                return succes;

            });
        });
    };

    write('file.txt', 'somenthing')
    .then(()=>{
        return append ('file.txt','Somethig');

    })
    .then (()=>{
        return read ('file.txt');
    })
    
    .catch(err =>{
        console.log('error');
    });

    let str1 = "eden";
    let str2 =  "dva";
    let str3 = "tri";

    let ime="Dardan";
    let pozdrav = `Jas sum ${ime}`;
    console.log(pozdrav);
    console.log(pozdrav.length);
    let str4 = 'a+b+c+d';
    let str4n= str4.split('+');
    console.log(str4n);