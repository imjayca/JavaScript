$(document).ready(function() {
	$('h1').mouseover(function() {
		// $(this).css({
		// 	'margin-left': '+=50px',
		// 	'background-color': 'yellow'
		// });	

		// $(this).addClass('emphasis shrink');
		// $(this).removeClass();
		$(this).toggleClass('shrink');
	});
});