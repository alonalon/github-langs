document.getElementById('overlay').style.visibility = 'hidden' ;
document.getElementById("realContent").style.visibility = "visible";

function showLoader(){
	var val = document.getElementById('username').value;
	if( val !== undefined && val !== null && val.length != 0 ){
		document.getElementById("overlay").style.visibility = "visible";
		document.getElementById("realContent").style.visibility = "hidden";
	}
}
