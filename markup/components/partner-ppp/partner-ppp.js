
const pppBtn = document.querySelector(".js-ppp");
const closeBtn = document.querySelector(".js-close");
const formBtn = document.querySelector('.form__btn');
const formCheckBox = document.querySelector('.agreement__checkbox');

formCheckBox.addEventListener('click', getAgreement);
closeBtn.addEventListener('click', close);
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
	let closeName = this.dataset.close;
	let closeEl = document.querySelector("." + closeName);
	closeEl.style.display = 'none';
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
	let openEl = document.querySelector("." + openName);
	let ppp = document.querySelector(".ppp");
	ppp.style.display = 'block';
	openEl.style.display = 'block';
}