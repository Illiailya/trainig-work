$(function () {

	$(function () {

		$('.clients__list').slick({
			dots: false,
			arrows: false,
			slidesToShow: 6,
			swipeToSlide: true,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});

	});

	$(window).on("scroll", function () {
		$('.header').toggleClass("header--active", $(this).scrollTop() > 0);
	});



	$('.footer__item-title').click(function() {
		console.log('.footer__item-title');

		$(this).toggleClass('footer__item-title--active');
	});

});