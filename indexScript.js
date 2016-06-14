console.log("Bonjour !");

var bouton = document.getElementById("bouton");
bouton.innerHTML = "Clique donc !";

var xhr = getXMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
		console.log("OK"); // C'est bon \o/
	}
};

xhr.open("POST", "/test", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("Yo");