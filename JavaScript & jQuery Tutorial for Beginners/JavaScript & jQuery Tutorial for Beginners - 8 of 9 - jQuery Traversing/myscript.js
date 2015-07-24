
// JavaScript & jQuery Tutorial for Beginners - 8 of 9 - jQuery Traversing

$(document).ready(function() {
	$('h1').click(function() {
		// $(this).css('background-color', 'red');
		// $(this).add('p').css('background-color', 'red');
		// $('p').not('p.second').css('background-color', 'red');
		// $('div').next().css('background-color', 'red');
		// $('h1').next().css('background-color', 'red');
		// $('h1').next('div').css('background-color', 'red');
		// $(this).next().css('background-color', 'red');
		// $('p').prev('p').css('background-color', 'red');
		// $(this).parent().css('background-color', 'red');
		// $('div').find('p').css('background-color', 'red');
		// $('p').first().css('background-color', 'red');
		// $('p').last().css('background-color', 'red');
		$('p').eq(2).css('background-color', 'red');


	});
});