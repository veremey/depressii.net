
/*- out search input click -*/
$(document).on('click touchstart', function(el){
 var childr = $('.header__bottom').find('*') && $('.js-open');

 if( $(el.target).is(childr) == false ){
   $('.header__bottom, .btn-menu').removeClass('is-active');
 }
});
/*--*/

$(document).on('scroll', function () {
		var $win =$(window).height();
		var $doc = $(document).scrollTop();

		var $headerHeight = $('.header').outerHeight();
		var $fixTop = $(document).height() - $win - $headerHeight;

		if($doc > 0){
			$('.header').addClass('is-fixed');
			} else {
			$('.header').removeClass('is-fixed');
		}

});