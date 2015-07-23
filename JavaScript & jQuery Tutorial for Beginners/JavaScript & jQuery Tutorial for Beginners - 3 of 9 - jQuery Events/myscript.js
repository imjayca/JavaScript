jQuery(document).ready(function($) {
	// $('h1').click(function() {
	// $('h1').mousedown(function() {
	$('h1').mouseenter(function() {
		$(this).css('background-color', '#6DFF82');
	});

	$('h1').mouseleave(function() {
		$(this).css('background-color', '#00B8FF');
	});

	$('h1').click(function() {
		$(this).css('background-color', '#FF0900');
	});
});