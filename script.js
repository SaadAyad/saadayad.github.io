var main = function() {
	$('.product').hover(function(){
		$(this).find('.titleProd').addClass('activeProd');
	},
	function(){
		$(this).find('.titleProd').removeClass('activeProd');
	});		


$('.widePic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

}

$(document).ready(main);