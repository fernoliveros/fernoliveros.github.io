

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

	if(username === 'fernando' && password === 'password1234'){
		alert("SUCCESSFUL LOGIN");
	}
	else {
		alert("USERNAME OR PASSWORD ARE INCORRECT")
	}
};

function hamlet() {
    work("hamlet");
}
function rNj() {
    work("r_and_j");
}
function othello() {
    work("othello");
}
function macbeth() {
    work("macbeth");
}
function juliusC() {
    work("j_caesar");
}
 function toSpeech(text){
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
 }
 
 function work(play) {
     dump();
     var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp.responseXML);
        }
    }
    xhttp.open("GET", "XMLplays/"+play+".xml", true);
    xhttp.send();

    function myFunction(xmlDoc) {
        
        var x = xmlDoc.getElementsByTagName('SPEECH');
        //BUTTON FOR EACH ACT AND SCENE
        var acts = xmlDoc.getElementsByTagName('ACT');
        var btnLinks = document.getElementById("btnLinks");
        var lineText = document.getElementsByTagName("lineText");
        for( a = 0; a < acts.length; a++){
            var scenes = acts[a].getElementsByTagName("SCENE"); 
            
            var actBtn = document.createElement('button');
            actBtn.setAttribute('type','button');
            actBtn.setAttribute('class',' act btn btn-link col-xs-12');
            actBtn.innerHTML = 'Act ' + (a+1);
            btnLinks.appendChild(actBtn);
            
            for( b = 0; b < scenes.length; b++){
                var sceneBtn = document.createElement('button');
                sceneBtn.setAttribute('type','button');
                sceneBtn.setAttribute('class','btn btn-link col-xs-12');
                sceneBtn.innerHTML = 'Scene ' + (b+1);
                btnLinks.appendChild(sceneBtn);
            }    
        }
        //ENDS HERE
        for( i = 0; i < x.length; i++){
            var speaker = x[i].getElementsByTagName("SPEAKER")[0].childNodes[0].nodeValue;
            var lines = x[i].getElementsByTagName("LINE");
            var speech = "";
            for( j = 0; j < lines.length; j++){
                speech += lines[j].childNodes[0].nodeValue;
            }
            var space = document.createElement('hr');
            $(".lineText").append(speech);
            $(".lineText").append(space);
            toSpeech(speaker + speech)
            setTimeout(3);
        }
    }
 }
 
 function dump(){
     $(".lineText").empty();
     $(".btnLinks").empty();
 }