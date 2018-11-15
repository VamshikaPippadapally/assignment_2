var fs = require('fs');
var read_string = fs.readFile('test.txt','utf8',function(err,data)
{
    if(err)
    return console.error(err);
    console.log(data);
    fs.writeFile('test7.txt',data,function(err,data)
    {
        if(err)
        return console.error(err);
       console.log('Success');
    });
    
});

console.log('the file is read');

