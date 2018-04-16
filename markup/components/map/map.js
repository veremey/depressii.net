
'use strict';

	const endpoint = 'place.json';
	// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

	const cities = [];
	const filials = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));


// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data)
//   .then());

  console.log(cities);

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
var matchPos;

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

      // title.push([filialName[i].title]);
      // address.push([filialName[i].address]);
      // telShort.push([filialName[i].telShort]);
      // site.push([filialName[i].site]);

      $marker.push([lat, lng]);
    }
    text += "";
    return text;
  }).push('');


  filialBox.classList.add('is-active');
  mapAside.classList.add('is-active');
  filialBox.innerHTML = text;
  icon = 'static/img/content/marker.png';
  initMap();
}

/*--  init map  ---*/

function findPosLat(wordToMatch, cities) {
  var pregex = new RegExp(wordToMatch, 'gi');
  console.log(cities.length );
  for (var i = cities.length - 1; i >= 0; i--) {
    return cities[i].filial.filter(place => {
      return place.match(pregex);
    })

  }
};

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

  infowindow = new google.maps.InfoWindow({
      content: 'matchPos',
      maxWidth: 200
    });



  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: $zoom || 15,
    center: centerMap
  });

  for (var i = $marker.length - 1; i >= 0; i--) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng($marker[i][0], $marker[i][1]) ,
      icon: icon,
      map: map
    }).addListener('click', function() {
      infowindow.open(map, marker);


      var clickLat = this.getPosition().lat();
      var clickLng = this.getPosition().lng();

      const matchPosLat = findPosLat(clickLat, cities);
      // const matchPosLng = findPosLng(clickLat, cities);

      matchPos = matchPosLat.map(place => {
        const filialName = place.title;
        const filialAddress = place.address;
        const filialTelShort = place.telShort;
        const filialSite = place.site;
        return `
          <div id="content">
            <div id="siteNotice"></div>
            <h1 id="firstHeading" class="firstHeading">${title}</h1>
            <div id="bodyContent">
              <p>${address}</p>
              <p>${telShort}</p>
              <p>Attribution: Uluru, <a href="${site}">${site}</a>
              (last visited June 22, 2009).</p>
            </div>
          </div>
        `;
      });

      console.log(matchPos);




    })

  }

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

