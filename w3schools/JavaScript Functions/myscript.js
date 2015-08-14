function letsCalc(a, b, c, d) {
    var a, b, c, d;
    return (a * b) / c + d;
}

document.write(letsCalc(5, 6, 2, 5) + "</br>");

// ------------------------------------------------------

// Function Expressions
// Anonymous function (a function without a name)
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
(function() {
    document.getElementById("demo").innerHTML = "This is a self-invoked call!";
})();

// ------------------------------------------------------

// Functions are Objects
// JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.


// The arguments.length property returns the number of arguments received when the function was invoked:
function multi(a, b) {
    return arguments.length;
}

document.write(multi(4, 3) + "<br/>");


// The toString() method returns the function as a string:
function funMeth(a, b) {
    return a * b;
}

document.write(funMeth.toString() + "<br/>");


// If a function is called with missing arguments (less than declared), the missing values are set to: undefined
function AnyFun(x, y) {
    if (y === undefined) {
        y = 0
    };
    return x * y;
}
document.write(AnyFun(2) + "<br/>");

// ------------------------------------------------------

// The Arguments Object
// JavaScript functions have a built-in object called the arguments object.

// The argument object contains an array of the arguments used when the function was called (invoked).


// Create a function to find the highest value in a list of numbers:
function findMax() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
document.write(findMax(4, 5, 6) + "<br/>");


// Create a function to summarize all input values:
function sumAll() {
    var i, sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
document.write(sumAll(5, 10, 5, 5) + "<br/>");

// ------------------------------------------------------

// Invoking a Function as a Method
var myObj = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + " " + this.lastName + "<br/>";
    }
}
document.write(myObj.fullName());
// The fullName method is a function. The function belongs to the object. myObject is the owner of the function.


// Invoking a Function with a Function Constructor

// A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.

// This is a function constructor:
function myFun(arg1, arg2) {
    this.firstName1 = arg1;
    this.lastName1 = arg2;
}
// This	creates a new object
var x = new myFun('Sanjay', 'Das');
document.write(x.firstName1 + "<br/>");


// Invoking a Function with a Function Method

// call() takes the function arguments separately
var myObj1;

function MultiFun(a, b) {
    return a * b;
}
myObj1 = MultiFun.call(myObj1, 10, 2);
document.write(myObj1 + "<br/>");


// apply() takes the function arguments in an array.
var myObj2, myArr;

function MultiFun1(a, b) {
    return a * b;
}
myArr = [10, 3];
myObj2 = MultiFun1.apply(myObj2, myArr);
document.write(myObj2 + "<br/>");


// ------------------------------------------------------


