;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("<i></i>Phone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );


	};

	var pauseVideoOutsideViewport = function() {
		$(document).ready(function ($) {
			$(window).scroll(function() {
				$('video').each(function(){
					if (!($(this).is(":in-viewport()"))) {
						$(this)[0].pause();
					}
				});
			});
		});
	};

	// Document on load.
	$(function(){

		// Animations
		contentWayPoint();
		pauseVideoOutsideViewport();

	});


}());
