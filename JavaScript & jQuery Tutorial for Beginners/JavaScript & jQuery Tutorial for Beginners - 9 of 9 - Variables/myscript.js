$(document).ready(function() {
	// // var xText= "String stored in var named xText"
	// // var xText=$('#head1').text();
	// var xText="This is some string "+ $('#head1').text();
	// // var xText1="Text stored in var named xText1";
	// // var xText2= xText1+xText;
	
	// $('h1').click(function() {
	// 	$('p').text(xText);
	// 	// $('p').text(xText2);
	// });

// ----------------------------------------------------------------------
	// var index= 1;
	// $('h1').click(function() {
	// 	$('p').eq(index).css('background-color', 'red');
	// });

// ----------------------------------------------------------------------
	// var index= 1;
	// var aNum=5;
	// index= aNum-4;

	// $('h1').click(function() {
	// 	$('p').eq(index).css('background-color', 'red');
	// });

// ----------------------------------------------------------------------
	// var lineNum=0;

	// $('h1').click(function() {
	// 	$('p').css('background-color', 'yellow');
	// 	// $('p').eq(lineNum).css('background-color', 'blue');
	// 	$('p').eq(lineNum).css({
	// 		'background-color': 'blue',
	// 		'color': 'white',
	// 		'font-size': '30px'
	// 	});
	// 	lineNum++;

	// 	if (lineNum>2) {
	// 		lineNum=0;
	// 	};

	// });


// ----------------------------------------------------------------------
	// var	imageName= ["cat.jpg", "dog.jpg", "bird.jpg"];
	// var indexNum=0;

	// $('#picture').click(function() {
	// 	$('#picture').attr('src', imageName[indexNum]);
	// 	indexNum++;
	// 	if (indexNum>2) {indexNum=0;}
	// });


// ----------------------------------------------------------------------
	var	imageName= ["cat.jpg", "dog.jpg", "bird.jpg"];
	var indexNum=0;

	$('#picture').click(function() {
		$('#picture').fadeOut(300, function  () {
			$('#picture').attr('src', imageName[indexNum]);
			indexNum++;
			if (indexNum>2) {indexNum=0};
			$('#picture').fadeIn(500);
		});
	});


});