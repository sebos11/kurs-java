var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
request.onreadystatechange = showResponse;
request.send();

function showResponse() {
	if (request.readyState == 4) {
		if (request.status == 200) {
			console.log(request.responseText);
		} else {
			console.log('Błąd');
		}		
	}
}