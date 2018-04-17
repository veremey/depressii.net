
const pppBtn = document.querySelector(".js-ppp");
const closeBtn = document.querySelector(".js-close");
// const openBtn = document.querySelector(".js-open");
const formBtn = document.querySelector('.form__btn');
const formCheckBox = document.querySelector('.agreement__checkbox');

formCheckBox.addEventListener('click', getAgreement);
closeBtn.addEventListener('click', close);
// openBtn.addEventListener('click', open);
pppBtn.addEventListener('click', ppp);


function getAgreement() {
	if (formCheckBox.checked) {
		formBtn.removeAttribute("disabled");
	} else {
		formBtn.setAttribute("disabled", "");
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
	let openName = this.dataset.open;
	let openEl = document.querySelector("." + openName);
	openEl.style.display = 'block';
}

function ppp(e) {
	e.preventDefault();
	let openName = this.dataset.open;
	let docHeight = document.documentElement.scrollHeight + "px";
	let openEl = document.querySelector("." + openName);
	let ppp = document.querySelector(".ppp");
	ppp.setAttribute('style', 'display: block; height: ' + `${docHeight}`);
	// console.log(docHeight);
	openEl.style.display = 'block';
}

$(document).ready(function () {
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

});
