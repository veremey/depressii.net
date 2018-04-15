
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

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const searchCity__box = document.querySelector('.searchCity__box');
  searchCity__box.classList.add('is-active');
  const citiesList = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.title.replace(regex, `<span class="highlight">${this.value}</span>`);
    const cityid = place.id;
    return `
      <li class="suggestions__list" data-id="${cityid}" tabindex="0">
        <span class="name">${cityName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = citiesList;
  $('.searchCity__scroll').mCustomScrollbar({});
}


var text, centerLat, centerLng,$marker = [];

function displayFilials() {
  const matchFilials = findMatches(inputValue, cities);
  const filialList = matchFilials.map(place => {
    const filialName = place.filial;
    centerLat = + place.lat;
    centerLng = + place.lng;

    text = '';
    for (var i = 0; i < filialName.length; i++) {
      if(filialName[i].title.length > 30){
        text += "<li class='filial__item'>" + filialName[i].title.substring(0,30) + '...' + "</li>";
      } else {
          text += "<li class='filial__item'>" + filialName[i].title + "</li>";
        }
      var $lat = filialName[i].merkerLat;
      var $lng = filialName[i].merkerLng;
      var lat = parseFloat($lat);
      var lng = parseFloat($lng);
      // $marker.push(lng);

      $marker.push({
        position: new google.maps.LatLng(lat, lng)
      });
    }
    text += "";
    return text;
  }).push('');

  console.log($marker);


  filialBox.classList.add('is-active');
  mapAside.classList.add('is-active');
  filialBox.innerHTML = text;
  initMap();
}

/*--  init map  ---*/

function initMap() {
  var $lat = 55.756491 || centerLat;
  var $lng = 37.812185 || centerLng;
  var $markerLat = 55.756491 || markerLat;
  var $markerLng = 37.812185 || markerLng;
  var centerMap = {lat: $lat , lng: $lng};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: centerMap
  });
  // var marker = $marker;
  // Create markers.
  $marker.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: $marker,
      map: map
    });
  });
}

/*--  init map  ---*/

const searchInput = document.querySelector('.searchCity__input');
const suggestions = document.querySelector('.suggestions');
const suggestionsList = document.querySelector('.suggestions__list');
const filialBox = document.querySelector('.filial');
const mapAside = document.querySelector('.map-aside');
var inputValue = '';

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('click', displayMatches);


$(document).ready(function () {

	$('.suggestions').on('click', '.suggestions__list', function () {
		var suggestionsHtml = $(this).find('.name').text();
		$('.searchCity__input').val(suggestionsHtml);
		$('.searchCity__box').removeClass('is-active');
    inputValue = '';
    inputValue += suggestionsHtml;
	});
  text = '';
	$('.suggestions').on('click', '.suggestions__list', displayFilials);


});

