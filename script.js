$(document).ready(function(){
	$('.button').hover(function(){
		$(this).addClass('active');
	},
	function(){
		$(this).removeClass('active');
	});
});