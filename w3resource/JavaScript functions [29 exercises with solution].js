// Write a JavaScript function that reverse a number.
function revNum (n) {
	n= n+ '';
	return n.split('').reverse().join('');
}

document.write(revNum(12345)+'<br/>');
