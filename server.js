//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');


//Lets define a port we want to listen to
const PORT=80;

//We need a function which handles requests and send response
function handleRequest(request, response){
    console.log("Requête reçue pour l'URL ", request.url, " : ", request.method);
    if(request.url == "/"){
	    file(response, "index.html");
    } else if(request.url == "/favicon.ico"){
    	file(response, "favicon.ico");
    } else if(request.url == "/indexScript.js"){
    	file(response, "indexScript.js");
    } else if(request.url == "/xhr.js"){
    	file(response, "xhr.js");
    } else if(request.url == "/test"){
    	request.on('data', function (chunk) {
        	console.log('GOT DATA : ', chunk);
    	});
    	message(response, "Bien reçu !");
    }  else {
    	console.log("URL inconnue : ", request.url);
    }
}

function file(response, fileName){
	fs.readFile(fileName, function(error, file) {
		if(error){
			throw error;
		} else {
    		response.writeHead(200);
    		response.write(file);
    		response.end();
		}
	});
}

function message(response, text){
	response.writeHead(200);
	response.write(text);
	response.end();
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
