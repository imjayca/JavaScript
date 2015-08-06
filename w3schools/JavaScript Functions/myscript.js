function letsCalc(a, b, c, d) {
    var a, b, c, d;
    return (a * b) / c + d;
}

document.write(letsCalc(5, 6, 2, 5) + "</br>");
// ------------------------------------------------------
// Function Expressions
var x = function(e, f) {
    var e, f;
    return e + f;
}

document.write(x(2, 2) + "</br>");
// ------------------------------------------------------
function toCel(Far) {
    return Math.round((5 / 9) * (Far - 32));
}

document.write(toCel(60) + "<br/>");
// ------------------------------------------------------
// Self-Invoking Functions
(function(){
	document.getElementById("demo").innerHTML="This is a self-invoked call!";
})();
