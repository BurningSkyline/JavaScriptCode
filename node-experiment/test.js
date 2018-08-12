var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
	if (error) {
	return console.log(error);
	} else {
	return console.log("congrats");
	}
});

var pinterestUrl = 'https://i.pinimg.com/564x/5c/a2/9d/5ca29d93bc4bcdafba38941082e896f4.jpg';

https.get(pinterestUrl, function(response){
	response.pipe(fs.createWriteStream(__dirname + "/carcass.jpg"));
});
