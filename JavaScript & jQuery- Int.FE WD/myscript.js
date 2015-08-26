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
document.write('The calulated area= ' + getSize(3, 5, 10)[0] + "<br/>");
document.write('The calulated volume= ' + getSize(3, 5, 10)[1] + "<br/>" + "<br/>" + "<br/>");



// Creating an obj: Literal Notation
// var hotel = {
//     name: 'Quay',
//     rooms: 40,
//     booked: 25,
//     checkAvailability: function() {
//         return this.rooms - this.booked;
//     }
// };

// var hotelName = hotel.name;
// var totalRooms = hotel.rooms;
// var roomsBooked = hotel.booked;
// var availableRooms = hotel.checkAvailability();

// document.write('Name of the hotel: ' + hotelName + '<br/>' +
//     'Total no of rooms: ' + totalRooms + '<br/>' +
//     'Rooms booked: ' + roomsBooked + '<br/>' +
//     'Available rooms: ' + availableRooms + '<br/>' + "<br/>" + "<br/>"
// );


// Creating instances of the object using constructor function
// function hotel (name,rooms) {
// 	this.name= name;
// 	this.rooms= rooms;
// }

// var hotel1= new hotel ('ShonarGaon', 400);
// var hotel2= new hotel ('Sheraton', 200);

// document.write('Name of the hotel2: ' + hotel2.name +"<br/>");
// document.write('Rooms in the hotel1: ' + hotel1.rooms +"<br/>");



// Displaying year in a footer section using JavaScript
var today = new Date();
var year = today.getFullYear();

document.write('Copyright &copy;' + year +"</br>"+"</br>"+"</br>");


var hotel = {
    name: "Shonargaon", //name of the hotel
    roomRate: 240, //Regular rate in dollars
    discount: 15, //Percentage discount
    offerPrice: function() {
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
}

var hotelName = hotel.name;
var roomRate = hotel.roomRate;
var specialRate = hotel.offerPrice();

document.getElementById('hotelName').innerHTML = hotelName;
document.getElementById('roomRate').innerHTML = '$' + roomRate;
document.getElementById('specialRate').innerHTML = '$' + specialRate;


/*
&& Operator
true && true returns true
true && false returns false
false && true returns false
false && false returns false


|| Operator
true || true returns true
true || false returns true
false || true returns true
false || false returns false


! Operator
!true returns false
!false returns true
*/


// Use of Logical AND
var r1score= 55;
var r1pass= 45;

var r2score= 70;
var r2pass= 45;

var passBoth= (r1score>= r1pass)&&(r2score>=r2pass);
var retake= !(passBoth);

document.write("Passed both rounds: "+ passBoth +"<br/>");
document.write("Needs retake: "+ retake +"<br/>");
if (passBoth=true) {
	document.write('Congratulations! You\'ve been Passed!' +"<br/>"+"<br/>"+"<br/>");
};

//Another example
var score = 75;
var msg= '';

function congratulations () {
	msg+="Congratulations! "
}

if (score>=50) {
	congratulations();
	msg+= "Proceed to the next round." +"</br>"+"</br>"+"</br>";
};

document.write(msg + "<br/>");



// HTML Event Handler Attr.
/*
function checkUsername () {
   var elMsg= document.getElementById('feedback');
   var elUsername= document.getElementById('username');

   if (elUsername.value.length<5) {
    // elMsg.textContent= 'Username must be 5 chars or long!';
    document.getElementById('feedback').innerHTML= 'Hello?';
   }else{
    elMsg.textContent='';
   }
}
*/

// TRADITIONAL DOM EVENT HANDLERS 

function checkUsername () {
    var elMsg= document.getElementById('feedback');
    if (this.value.lenght<5) {
        elMsg.textContent='Username must be 5 char or long!';
    }else{
        elMsg.textContent='';
    }
}

var elUsername= document.getElementById('username');
elUsername.onblur= checkUsername;