var http = require('http');
var fs = require('fs');//see this line?

http.createServer(function (req, res) {
	fs.readFile('demofile1.html', function(err, data) {//get content from file
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		//res.end();
	});
  
	fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {//add content into already existing file
		if (err) throw err;
		console.log('Saved!');
	});
	
	fs.open('mynewfile2.txt', 'w', function (err, file) {//create new file in write mode
		if (err) throw err;
		console.log('Saved!');
	});

	fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
		if (err) throw err;
		console.log('Saved!');
	});

	fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
		if (err) throw err;
		console.log('Updated!');
	});
	
	fs.unlink('mynewfile2.txt', function (err) {//delete a file
		if (err) throw err;
		console.log('File deleted!');
	});
	
	fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
		if (err) throw err;
		console.log('File Renamed!');
	});



	res.end();
}).listen(8080);