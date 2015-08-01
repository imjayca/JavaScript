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


var vehicles = new array ("car", "truck", "van");
document.write("The first element of the array is: " + vehicles[2] + "<br/>");
document.write(vehicles[0]);