
var largePic = 'static/img/general/contraindications.png';
var smallPic = 'static/img/general/contraindications-small.png';
$(window).on('resize', function () {
	if($(document).width() < 650 ){
		$('.js-mobChangePic').attr('src', smallPic);
	} else {
		$('.js-mobChangePic').attr('src', largePic);
	}
});

$(document).ready(function () {
	if($(document).width() < 650 ){
		$('.js-mobChangePic').attr('src', smallPic);
	} else {
		$('.js-mobChangePic').attr('src', largePic);
	}
});