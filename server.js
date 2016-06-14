//Lets require/import the HTTP module
var http = require('http');
var fs = require('fs');


//Lets define a port we want to listen to
const PORT=80;

//We need a function which handles requests and send response
function handleRequest(request, response){
    console.log("Requête reçue pour l'URL ", request.url);
    if(request.url == "/"){
	    file(response, "index.html");
    } else if(request.url == "/favicon.ico"){
    	file(response, "favicon.ico");
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

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
