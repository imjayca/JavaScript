// JavaScript HTML DOM Elements
// Ways to find HTML elements-

// 1. by id
// 2. by tag
// 3. by class
// 4. by css selector
// 5. HTML object collections

function changeText(id) {
    id.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quos inventore enim ab similique possimus voluptatibus laboriosam sint. Numquam temporibus, facilis maiores laborum nulla repellendus nesciunt labore ipsa atque ad.'
}


function showDate() {
    document.getElementById('demo').innerHTML = Date();
}

// The addEventListener() method
document.getElementById('btn').addEventListener('click', displayDate);

function displayDate() {
    document.getElementById('demo1').innerHTML = Date();
}

// Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".

// Antoher .addEventListener example:
document.getElementById('btn1').addEventListener('click', function() {
    alert("Hello World!");
})

// Add events of different types to the same element:
var x = document.getElementById('btn2');
var y = document.getElementById('demo2');

x.addEventListener('mouseover', movFunc);
x.addEventListener('mouseout', motFunc);
x.addEventListener('click', clickFunc);

function movFunc() {
    y.innerHTML += 'MouseOver!<br>';
}

function motFunc() {
    y.innerHTML += 'MouseOut! <br>';
}

function clickFunc() {
    y.innerHTML += 'ButtonClicked! <br>';
}


// Event propagation
// There are two ways of event propagation in the HTML DOM, bubbling and capturing. 

// The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

document.getElementById('myDiv1').addEventListener('click', function() {
    alert('DIV1 element clicked!')
}, false);

document.getElementById('myP1').addEventListener('click', function() {
    alert('P1 element clicked!')
}, false);

document.getElementById('myDiv2').addEventListener('click', function() {
    alert('DIV2 element clicked!')
}, true);

document.getElementById('myP2').addEventListener('click', function() {
    alert('P2 element clicked!')
}, true);


// JavaScript HTML DOM Elements (Nodes)
// Creating New HTML Elements (Nodes)
var para= document.createElement('p');
var node= document.createTextNode('The is a new para');
para.appendChild(node);
var element = document.getElementById('newDiv');
element.appendChild(para);