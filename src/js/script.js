$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
        nav: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 6                
			}
		}
	});

    $(".navbar-toggler").on("click", function() {
        $(this).toggleClass("active");
    });
});
