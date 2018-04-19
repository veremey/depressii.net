
const pppBtn = $(".js-ppp");
const closeBtn = $(".js-close");
// const openBtn = $(".js-open");
const formBtn = $('.form__btn');
const formCheckBox = $('.agreement__checkbox');

formCheckBox.on('click', getAgreement);
closeBtn.on('click', close);
// openBtn.on('click', open);
pppBtn.on('click', ppp);


function getAgreement() {
	if (formCheckBox.checked) {
		formBtn.removeAttr("disabled");
	} else {
		formBtn.attr("disabled", "");
	}
}

function close(e) {
	e.preventDefault();
	let closeName = $(this).data('close');
	let parentName = $(this).data('parent');
	let closeEl = $("." + closeName);
	let parentEl = $("." + parentName);
	closeEl.css({'display': 'none'});
	parentEl.css({'display': 'none'});
}


function open(e) {
	e.preventDefault();
	let openName = $(this).data('open');
	let openEl = $("." + openName);
	openEl.css({'display' : 'block'});
}

function ppp(e) {
	e.preventDefault();
	let openName = $(this).data('open');
	let docHeight = $(document).height() + "px";
	let openEl = $("." + openName);
	let ppp = $(".ppp");
	ppp.attr('style', 'display: block; height: ' + `${docHeight}`);
	// console.log(docHeight);
	openEl.css({'display' : 'block'});
}

$(document).ready(function () {
	let docHeight = $(document).height() + "px";

	$(".js-open").on('click', function(e) {
		e.preventDefault();
		var openName = $(this).data('open');
		var openEl = $("." + openName);

		if($(this).hasClass('is-active')){
			$(this).removeClass('is-active');
			openEl.removeClass('is-active');
		} else {
			$(this).addClass('is-active');
			openEl.addClass('is-active');
		}

	});

	if($('.js-autoppp').length){
		setTimeout(function() {
			$('.ppp').attr('style', 'display: block; height: ' + `${docHeight}`);
			$('.js-autoppp').css({'display' : 'block'});
		}, 2000);
	}

});
