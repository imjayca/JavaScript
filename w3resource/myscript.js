// 2. Write a JavaScript program to print the contents of the current window.
function printCurrentPage () {
	window.print();
}

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
var side1= 5,
	side2= 6,
	side3=7,
	perimeter=(side1+side2+side3)/2,
	area= Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));

document.write(area);


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function rotateStringRight() {
    var elem = document.getElementById("rotateStr");
    var textNode = elem.childNodes[0];
    var str = textNode.data;

    setInterval(function() {
        var lastChar = str.charAt(str.length - 1);
        var shortStr = str.substr(0, str.length - 1);
        str = lastChar + shortStr;

        textNode.data = str;
    }, 100);

};



function letsCalcu(a, b, c) {
   var a, b, c;
   var d = (a * b) / c;
   var e = d / 2;
   return e;
}

document.write(letsCalcu(5, 6, 2) + "</br>");

