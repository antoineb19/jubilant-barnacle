console.log("Bonjour !");

var sendButton = document.getElementById("bouton1");
sendButton.innerHTML = "Envoyer !";

var textField = document.getElementById("textField");

sendButton.onclick = function(){
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			console.log("OK"); // C'est bon \o/
			console.log(xhr.responseText.toString('utf-8'));
		}
	};

	xhr.open("POST", "/test", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(textField.value);
}

var getButton = document.getElementById("bouton2");

getButton.onclick = function(){
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			console.log("OK"); // C'est bon \o/
			var text = decodeURIComponent(xhr.responseText);
			document.getElementById("resultField").innerHTML = text;
		}
	};

	xhr.open("GET", "/get", true);
	xhr.send(null);
}



