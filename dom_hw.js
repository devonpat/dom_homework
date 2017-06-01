document.getElementById('stubborn').addEventListener('click', function(e) {
	e.preventDefault();
	document.getElementById('argue').innerHTML = "<h3>I am Right</h3>";
});

document.getElementById('more_stubborn').addEventListener('click', function(e) {
	e.preventDefault();
	document.getElementById('argue').innerHTML = "<h3> NO!! I am Right</h3>";
});


document.getElementById('hover1').addEventListener('mouseover', function(e) {
	console.log('this');
	let heading = this.innerText;
	alert("Hey, I told you not to hover over me!");
});

document.addEventListener('keypress', function(e) {
	let keypress = document.getElementById('keypress');
	keypress.innerText = e.key;
});

document.getElementById('submit').addEventListener('click', function(e){
	e.preventDefault();
	var password = document.getElementById('password').value;
	var username = document.getElementById('username').value;
	if (password === "12345678" && username.length <= 14) {
		document.getElementById('info').innerHTML = "<h1>Congrats on knowing your username and password!</h1>";
	}
	else {
		alert("Incorrect Username or Password");
	}
});

