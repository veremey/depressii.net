
'use strict';


var text, centerLat, centerLng,$zoom,icon,
title = [],
$title,
$address,
$tel,
$telShort,
$site,
address = [],
tel = [],
telShort = [],
site = [],
content = {},
$content = [],
$marker = [];
var contentString = [];
var infowindow;
var matchPos;

var contentHTML = $('.hiden-map-info').html();
var maxInfoWidth = $('.map-module').width() * .3 > 300 ? $('.map-module').width() * .3 : 300;

	const endpoint = 'place.json';
	// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	const cities = [];
	const filials = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));


  // console.log(cities);

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
      // var $lng = filialName[i].merkerLng;

      title.push([filialName[i].title]);
      address.push([filialName[i].address]);
      telShort.push([filialName[i].telShort]);
      tel.push([filialName[i].tel]);
      site.push([filialName[i].site]);


      content = {
        "title" : title,
        "address": address,
        "telShort": telShort,
        "tel": tel,
        "site" : site
      };

      $title = content.title[i];
      $address = content.address[i];
      $telShort = content.telShort[i];
      $tel = content.tel[i];
      $site = content.site[i];

      $marker.push([lat, lng]);

      $content.push(`<div class="map-content">
      <h5 class="map__title">'${$title}'</h5>
      <p class="map__address">'${$address}'</p>
      <div class="map__contact">
        <div class="map__row">
          <img src="static/img/content/icon-tel.png" alt="tel">
          <a href="tel:+74952121111" class="map__tel" data-tel="${$tel}">${$telShort}</a>
          <button class="show-tel">Показать номер</button>
        </div>
        <div class="map__row">
          <img src="static/img/content/icon-earth.png" alt="tel">
          <a href="${$site}" class="map__site">${$site}</a>
        </div>
      </div>
      <p class="map__info">Дополнительная информация: Для записи на прием к врачу позвоните, пожалуйста, по указанному телефону. Обязательно уточните, работает ли клиника по ОМС, ДМС полисам или организован платный прием.</p>
    </div>`);
    }
    text += "";
    return text;
  }).push('');


  filialBox.classList.add('is-active');
  mapAside.classList.add('is-active');
  filialBox.innerHTML = text;

  $('.filial').mCustomScrollbar({});

  icon = 'static/img/content/marker.png';
  iconHighlight = 'static/img/content/marker-hover.png';
  initMap();

  $('.map-btns .btn').removeClass('is-active');
  $('.btn-list').addClass('is-active');
}

$('.map-btns').on('click','.btn', function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
  if($('.btn-list').hasClass('is-active')){
    $('.filial, .map-aside').addClass('is-active');
  } else{
    $('.filial, .map-aside').removeClass('is-active');
  }
});

/*--  init map  ---*/

// function findPosLat(wordToMatch, cities) {
//   var pregex = new RegExp(wordToMatch, 'gi');
//   console.log(cities.length );
//   for (var i = cities.length - 1; i >= 0; i--) {
//     return cities[i].filial.filter(place => {
//       return place.match(pregex);
//     })
//   }
// };

// function findPosLng(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     var pregex = new RegExp(wordToMatch, 'gi');
//     return place.filial.merkerLng.match(pregex);
//   });
// };



function initMap() {
  var $lat = centerLat || 55.756491;
  var $lng = centerLng || 37.812185;
  var marker;
  var centerMap = {lat: $lat , lng: $lng};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: $zoom || 15,
    center: centerMap
  });

  for (var i = $marker.length - 1; i >= 0; i--) {
    // infoBlock = $content[i];

    marker = new google.maps.Marker({
      position: new google.maps.LatLng($marker[i][0], $marker[i][1]) ,
      icon: icon,
      map: map
    });

  }

  // console.log($title);

  infowindow = new google.maps.InfoWindow({
      content: contentHTML,
      maxWidth: maxInfoWidth
    });

  marker.addListener('click', function() {
      var icon = iconHighlight;
      marker.setIcon(iconHighlight);
      infowindow.open(map, marker);
      // console.log(this.position.lng());
      // console.log(this.position.lat());
   });


    google.maps.event.addListener(infowindow, 'closeclick', function() {
      marker.setIcon(icon);
    })


}


$('#map').on('click','.show-tel', function () {
  var text = $(this).parent('.map__row').find('.map__tel').data('tel');

  $(this).parent('.map__row').find('.map__tel').text(text);
});

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

