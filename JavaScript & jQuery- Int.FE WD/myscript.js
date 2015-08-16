// CREATING A BASIC JAVASCRIPT 
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write(greeting + '<br/>');

// Getting a single value out of a function
function calArea(width, height) {
    return width * height;
}
document.write(calArea(5, 10) + "<br/>");
document.write(calArea(50, 2) + "<br/>");


// Getting multiple values out of a function
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var size = [area, volume];
    return size;
}
document.write(getSize(3, 5, 10) + "<br/>");
document.write('The calulated area= '+getSize(3, 5, 10)[0] + "<br/>");
document.write('The calulated volume= '+getSize(3, 5, 10)[1] + "<br/>");