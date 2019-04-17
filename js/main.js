function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.logo__container').toggleClass('active');
	$('.burger__bar').removeClass('dark');
	let x = $('.burger').attr("aria-expanded"); 
 if (x == "true") 
  {
 x = "false"
 } else {
 x = "true"
}
$('.burger').attr("aria-expanded", x);
}

$('.burger').on('click', toggleActive);

$('.nav__link').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})




$('.nav__link, .btn__scrollToTop').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)

})


$(document).on('scroll', function () {
	const $scrollValue = $(this).scrollTop();
	const $services = $('.section--services');
	const $team = $('.section--team');
	const $testimonials = $('.section--testimonials');

	const $servicesFromTop = $services.offset().top;
	const $teamFromTop = $team.offset().top;
	const $testimonialsFromTop = $testimonials.offset().top;
	const $burgerFromTop = $('.burger').css('top').replace('px', '')
	//change burger color
	if ($scrollValue > $teamFromTop - $burgerFromTop && $scrollValue < $testimonialsFromTop - $burgerFromTop) {
		$('.burger__bar').addClass('dark');

	} else {
		$('.burger__bar').removeClass('dark');
	}

	
	const $docWidth = $(document).width();

	if ($scrollValue > $servicesFromTop / 2 && $docWidth > 1023) {
		$('.btn__scrollToTop').fadeIn(300, 'linear');
	} else {
		$('.btn__scrollToTop').fadeOut(300, 'linear');
	}

})