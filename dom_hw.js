document.getElementById('stubborn').addEventListener('click', function(e) {
	console.log('this');
	let heading = this.innerText;
	alert("I'm right");
});

document.getElementById('more_stubborn').addEventListener('click', function(e) {
	console.log('this');
	let heading = this.innerText;
	alert("No I'm right");
});

