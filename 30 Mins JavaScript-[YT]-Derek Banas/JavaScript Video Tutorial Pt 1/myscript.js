document.write(Number.MAX_VALUE + "<br />");
document.write(Number.MIN_VALUE);

var first_str = "First String";
var second_str = " and Second String";
var combined = first_str + second_str;

document.write(combined + "<br />");


document.write("Length of the string: " + combined.length + "<br/>");
document.write("Substring: " + combined.substr(6, 12) + "<br/>")
document.write("Last character: " + combined.charAt(combined.length - 1) + "<br/>");
document.write("Index of \'T': " + combined.indexOf("t") + "<br/>");

var str_var = "5";
var num_var = 10;

var total = str_var + num_var;

var mult_var = str_var * num_var;

document.write(total + "<br/>");
document.write(mult_var + "<br/>");
document.write(total.length);


var num_var2 = String(num_var);
var total = str_var + num_var2;
document.write(num_var2 + num_var + "<br/>");


rand_var1 = 5;
rand_var2 = 10;
document.write("Is 5>10? : " + (rand_var1 > rand_var2) + "<br/>");
document.write("Is 5<10? : " + (rand_var1 < rand_var2) + "<br/>");
document.write("Is 5==10? : " + (rand_var1 == rand_var2) + "<br/>");
document.write("Is 5!=10? : " + (rand_var1 != rand_var2) + "<br/>");
document.write("Is 5>=10? : " + (rand_var1 >= rand_var2) + "<br/>");
document.write("Is 5<=10? : " + (rand_var1 <= rand_var2) + "<br/>");


var vehicles = new Array("car", "truck", "van");
document.write(vehicles[0] + "<br/>");
document.write("The second element of the array is: " + vehicles[1] + "<br/>");
document.write("The third element of the array is: " + vehicles[2] + "<br/>");


// For In Looping for Arrays::
for (i in vehicles) {
    document.write(vehicles[i] + "<br/>");
}


// Conditional Statements
// Conditional Operators
var rand_var = (5 < 10) ? "5 is less than 10" : "5 is greater than 10";
document.write("The resulet has been found:" + rand_var + "<br/>");


// If Staement
if (5 < 10) {
    document.write("5 is smaller than 10" + "<br/>");
} else if (5 > 10) {
    document.write("5 can not be bigger than 10" + "<br/>");
} else {
    document.write("5 is equal to 10" + "<br/>");
}

if (10 > 20) {
    document.write("10 can not be larger than 20" + "<br/>");
} else if (10 < 20) {
    document.write("Yes, 10 is smaller than 20" + "<br/>");
} else {
    document.write("Crazy! 10 is equal to 20" + "<br/>")
}


// The Switch Statement
var state = "California";
switch (state) {
    case "California":
        document.write("Got it right!" + "<br/>");
        break;

    case "New York":
        document.write("Yes, NewYork!" + "<br/>");
        break;

    default:
        document.write("Lol, don't know!" + "< br />");
        break;
}


// Multi-case - single operation
var animal = "Giraffe";
switch (animal) {
    case "Cow":
    case "Goat":
    case "Giraffe":
        document.write("This animals will go on Moon\'s Ark" + "<br/>");
        break;

    case "Dinosaur":

    default:
        document.write("I dont know!");
        break;
}


// Looping Tools
// While Loop
var count = 1;
while (count <= 10) {
    // if (count==5) {break;}; 
    // if (count % 2) {
    //     count++;
    //     continue; 
    // };

    document.write(count + "<br/>");
    count++;
}


var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n;

    document.write("The current value of n= " + n + "<br/>");
    document.write("The current value of x= " + x + "<br/>" + "<br/>");
}


// Do While Loop
// Example1
var i = 0;
do {
    i += 1;
    document.write(i + "<br/>");
} while (i < 10);


// Example2
var count = 15;
do {
    document.write(count + "<br/>");
    count--;
} while (count > 10);



// For Loop

// Syntax:
// for ([initialization]; [condition]; [final-expression])
//    statement

// Example1
for (var i = 0; i < 10; i++) {
    document.write(i + "<br/>");
};


// Function Example
function addThese(a, b) {
    return a + b;
}

document.write("a+b= " + addThese(5, 10) + "<br/>");