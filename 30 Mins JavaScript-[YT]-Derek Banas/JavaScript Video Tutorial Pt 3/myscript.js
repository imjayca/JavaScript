// function Animal () {
// 	this.name="Animal Name";
// 	this.sound="Grr";
// 	this.owner="Owner's Name";
// 	this.favFood="Food Name";
// }

// Animal.prototype.setName = function (newName) {
// 	if (typeof newName != 'undefiend') {
// 		this.name= newName;
// 	}else{
// 		document.write("Please enter a valid animal name.");
// 	}
// }

// Animal.prototype.getName = function () {
// 	return this.name;
// }


// Animal.prototype.set = function (arguments) {
// 	// body...
// }

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new person("John", "Doe", "50", "blue");
var myMother = new person("Sally", "Rally", "48", "green");

document.write("My father's name is: " + myFather.firstName + " " + myFather.lastName + "." + " He is " + myFather.age + " years old.");