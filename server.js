//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=80;

//We need a function which handles requests and send response
function handleRequest(request, response){
    console.log("Requ�te re�ue pour l'URL ", request.url);
    response.writeHead(200);
    response.write("Hello world !");
    response.end();
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
