var fs = require('fs');

fs.appendFile('test.txt', 'This text is appended using fs.append\n', function (err) {
    if (err) throw err;
    console.log('saved');
});