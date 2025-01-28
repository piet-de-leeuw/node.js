var fs = require('fs');

fs.writeFile('test.txt', 'This file and text are replaced using fs.writeFile\n', function(err) {
    if(err) throw err;
    console.log('Saved!');
});