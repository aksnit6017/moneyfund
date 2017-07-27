var btn = document.getElementById('btn');
var container = document.getElementById('api-data');
btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'http://www.apilayer.net/api/live?access_key=90d8fbd98da13d563b8d51f9dd826766&format=1');
	ourRequest.onload = function () {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
		};
	ourRequest.send();
	});

function renderHTML(data){
	var apiString = "";

	for (var i = 0; i < data.quotes.length; i++) {
		apiString += "<p>" + data.quotes[i] + "</p>";
	}

	container.insertAdjacentHTML('beforeend',apiString)
}