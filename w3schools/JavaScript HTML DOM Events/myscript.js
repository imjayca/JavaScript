// // Input Events

// // onblur - When a user leaves an input field
// function upCase () {
// 	elUsername.value= elUsername.value.toUpperCase();
// }
// var elUsername= document.getElementById('username');
// elUsername.onblur= upCase;




// // onblur - When a user leaves an input field
// function prepBrowser () {
// 	prefer= document.forms[0].browsers.value;
// 	alert('You prefer using '+ prefer);
// }
// var elDrop= document.getElementById('browsers');
// elDrop.onchange= prepBrowser;


// //onfocus - When an input field gets focus
// function chgBg () {
// 	elBg.style.background='yellow';
// }

// var elBg= document.getElementById('changeBgColor');
// elBg.onfocus= chgBg;


// //onselect - When input text is selected
// function selectText () {
// 	document.getElementById('demo').innerHTML= "You've selected the text!"
// }

// var elText= document.getElementById('someText');
// elText.onselect= selectText;


//onsubmit - When a user clicks the submit button
// function confirmInput () {
// 	var yourName= document.forms[0].yourName.value;
// 	alert('Hello!');
// }

// var xForm= document.getElementById('visitGoogle');
// xForm.onsubmit=confirmInput;

// function mDown () {
// 	this.style.background='red';
// }

// function mUp () {
// 	this.style.background='yellow';
// }

// var para1=document.getElementById('p1');
// para1.onmousedown=mDown;
// para1.onmouseup=mUp;

function h1Col () {
	this.style.color='yellow';
}
var head= document.getElementById('hello');
head.onmouseover= h1col;