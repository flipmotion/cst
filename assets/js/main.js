$(document).ready(function() {
		var owl = $('[data-item="slider"]');
		
	$('[data-item="slider"]').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:false,
		items:1
	});
	$('.navigation-slider .icon-left').click(function() {
		owl.trigger('prev.owl.carousel');
	});
	$('.navigation-slider .icon-right').click(function() {
		owl.trigger('next.owl.carousel');
	});
	$('[data-mask="phone"]').mask("+7 (999) 999-99-99");
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
});