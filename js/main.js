function toggleActive() {
	$('.burger').toggleClass('active');
	$('nav').toggleClass('active');
	$('.logoContainer').toggleClass('active');
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

$('.navLink').on('click', function () {
	if ($('nav').hasClass('active')) {
		toggleActive();
	}
})




$('.navLink, .btn__scrollToTop').on('click', function () {
	const goToSection = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(goToSection).offset().top
	}, 1000)

})


$(document).on('scroll', function () {
	const $scrollValue = $(this).scrollTop();
    const $offer = $('.sectionOffer');
    const $promo = $('.sectionPromo');
    const $aboutus = $('.sectionAboutus');



    const $offerFromTop = $offer.offset().top;
    const $promoFromTop = $promo.offset().top;
    const $aboutusFromTop = $aboutus.offset().top;
	const $burgerFromTop = $('.burger').css('top').replace('px', '')
	if ($scrollValue > $promFromTop - $burgerFromTop && $scrollValue < $aboutusFromTop - $burgerFromTop) {
		$('.burger__bar').addClass('dark');

	} else {
		$('.burger__bar').removeClass('dark');
	}

	
	const $docWidth = $(document).width();

	if ($scrollValue > $offerFromTop / 2 && $docWidth > 1023) {
		$('.btn__scrollToTop').fadeIn(300, 'linear');
	} else {
		$('.btn__scrollToTop').fadeOut(300, 'linear');
	}

})