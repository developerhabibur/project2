
$('document').ready(function () {
	$('.owl-carousel1').owlCarousel({
		loop: true,
		margin: 40,
		autoplay: true,
		dots: false,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 5
			}
		}
	});
});


$('document').ready(function () {
	$('.owl-carousel2').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		autoplay: false,
		autoplayTimeout: 4000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			972: {
				items: 3
			}
		}
	});
});

$('document').ready(function () {
	$('.owl-carousel3').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		autoplay: false,
		autoplayTimeout: 4000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});
$('.customNextBtn1').click(function () {
	$('.owl-carousel3').trigger('next.owl.carousel');
});
// Go to the previous item
$('.customPrevBtn1').click(function () {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	$('.owl-carousel3').trigger('prev.owl.carousel', [300]);
});
// ****************External Online JS****************
/* upper button scroll start*/
$(document).ready(function () {
	$(window).scroll(function () {
		var x = $(window).scrollTop();
		if (x > 500) {
			$('#upper').fadeIn();
		} else {
			$('#upper').fadeOut();
		}
	});

	/* upper button click to top*/
	$('#upper').click(function () {
		$('html').animate({ scrollTop: 0 }, 1500)
	});
});

// ===========CounterUP JS===========
$('document').ready(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
// ===============End===============
	 