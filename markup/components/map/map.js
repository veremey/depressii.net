
'use strict';

	const endpoint = 'place.json';
	// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	const cities = [];
	const filials = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.title.match(regex);
  });
}
function findfilials(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    return place.filial;
  });
}
var text;

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const searchCity__box = document.querySelector('.searchCity__box');
  searchCity__box.classList.add('is-active');
  const citiesList = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.title.replace(regex, `<span class="highlight">${this.value}</span>`);
    const cityid = place.id;
    return `
      <li class="suggestions__list" data-id="${cityid}">
        <span class="name">${cityName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = citiesList;

  const filialList = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const filialName = place.filial

    text = '';
    for (var i = 0; i < filialName.length; i++) {
        text += "<li class='filial__item'>" + filialName[i] + "</li>";
    }
    // console.log(text);

    return text;
  }).push('');
  filialBox.classList.add('is-active');
  mapAside.classList.add('is-active');
  filialBox.innerHTML = text;
}


const searchInput = document.querySelector('.searchCity__input');
const suggestions = document.querySelector('.suggestions');
const suggestionsList = document.querySelector('.suggestions__list');
const filialBox = document.querySelector('.filial');
const mapAside = document.querySelector('.map-aside');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('click', displayMatches);
// filial.addEventListener('click', displayFilials);


$(document).ready(function () {
	$('.suggestions').on('click', '.suggestions__list', function () {
		var suggestionsHtml = $(this).find('.name').text();

		$('.searchCity__input').val(suggestionsHtml);
		$('.searchCity__box').removeClass('is-active');
	});

	// $('.suggestions').on('click', '.suggestions__list', displayFilials);

});

