
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


var text, centerLat, centerLng,$zoom,icon, title = [], address = [], telShort = [], site = [], $marker = [];
var contentString = [];
var infowindow;
var content;

function displayFilials() {
  const matchFilials = findMatches(inputValue, cities);
  const filialList = matchFilials.map(place => {
    const filialName = place.filial;

    centerLat = + place.lat;
    centerLng = + place.lng;
    $zoom = + place.zoom;

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
      var $lng = filialName[i].merkerLng;

      title.push([filialName[i].title]);
      address.push([filialName[i].address]);
      telShort.push([filialName[i].telShort]);
      site.push([filialName[i].site]);

      $marker.push([lat, lng]);
    }
    text += "";
    return text;
  }).push('');

  // console.log($marker);

  filialBox.classList.add('is-active');
  mapAside.classList.add('is-active');
  filialBox.innerHTML = text;
  icon = 'static/img/content/marker.png';
  initMap();
}

/*--  init map  ---*/

function initMap() {
  var $lat = centerLat || 55.756491;
  var $lng = centerLng || 37.812185;
  var marker;
  var centerMap = {lat: $lat , lng: $lng};


  // for (var i = $marker.length - 1; i >= 0; i--) {
  //   contentString.push(['<div id="content">'+
  //      '<div id="siteNotice"></div>'+
  //      '<h1 id="firstHeading" class="firstHeading">' +title[i]+ '</h1>'+
  //      '<div id="bodyContent">'+
  //      '<p>' +address[i]+ '</p>'+
  //      '<p>' +telShort[i]+ '</p>'+
  //      '<p>Attribution: Uluru, <a href="' +site[i]+ '">'+
  //      '' +site[i]+ ''+
  //      '(last visited June 22, 2009).</p>'+
  //      '</div>'+
  //      '</div>']);

  //   content = contentString[i].join('');
  //   infowindow = new google.maps.InfoWindow({
  //     content: content
  //   });
  // }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: $zoom || 15,
    center: centerMap
  });

  for (var i = $marker.length - 1; i >= 0; i--) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng($marker[i][0], $marker[i][1]) ,
      icon: icon,
      map: map
    }).addListener('click', toggleBounce);

  }



  // google.maps.event.addListener(marker, 'click', function(evt) {
  //   // console.log('111111');

  //   var posLat = evt.latLng.lat();
  //   var posLng = evt.latLng.lng();

  //   var matchPosLat = findMatches(posLat, cities);
  //   var PosLatinfo = matchPosLat.map(place => {
  //     if(place.filials.merkerLng == posLng ){
  //       alert('yo-yo-oy');
  //     }

  //   });

  //   /* получить координаті маркера
  //   * проверить кому єти координаті принадлежат
  //   * найти данніеу владельуа и вівести их*/

  //   // infowindow.open(map, marker);
  // });

}

function toggleBounce() {
  if (this.getAnimation() !== null) {
    this.setAnimation(null);
  } else {
    this.setAnimation(google.maps.Animation.BOUNCE);
  }
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

