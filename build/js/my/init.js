$(document).ready(function() {
	var owl = $('[data-item="slider"]');
	$('[data-item="slider"]').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:false,
		items:1
	});
	$("input[type=file]").nicefileinput({
		label : 'Прикрепить файл (до 20 Мб)'
	});
	var to = $('.gallery-main-object img');
	var tolink = $('.gallery-main-object a');
	var from = $('.gallery-object img');
	from.click(function() {
		var loc = $(this).attr("src");
		to.attr("src",loc);
		tolink.attr("href",loc);
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
			scrollTop: $( $.attr(this, 'href') ).offset().top -100
		}, 500);
		return false;
	});
});