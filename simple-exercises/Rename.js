var fs = require('fs');

fs.rename('test.txt', 'renamedtest.txt', function(err) {
    if(err) throw err;
    console.log('Renamed');
});