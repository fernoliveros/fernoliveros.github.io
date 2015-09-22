var toggleBool = true;
var kelseyBool = false;
var pattyCakesBool = false;

function logIn() {
	var password = prompt("Please enter the secret password");

	if (password === "password1234") {
		$('.body').attr("hidden", false);
		$('title').attr("hidden", false);
		$('.encrypted').attr("hidden", true);
	} else {
		alert("INCORRECT PASSWORD");
	}
};

function collectLogIn(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if(username === 'FernBaby' && password === 'password1234'){
		alert("SUCCESSFUL LOGIN");
	}
	else {
		alert("USERNAME OR PASSWORD ARE INCORRECT")
	}
};