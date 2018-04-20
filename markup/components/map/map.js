
'use strict';

const cities = [
  {
    "id": "0",
    "title": "Белгород",
    "lat": 50.609409,
    "lng": 36.578795,
    "zoom": 14,
    "filial": [
      {
        "title" : "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603053,
        "merkerLng": 36.581496
      },
      {
        "title" : "КДЦ «МЕДСИ»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603313,
        "merkerLng": 36.601398
      },
      {
        "title" : "МК Семейный доктор",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603824,
        "merkerLng": 36.592693
      },
      {
        "title" : "Медицинский центр «Атлас»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.610333,
        "merkerLng": 36.576913
      },
      {
        "title" : "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603053,
        "merkerLng": 36.581496
      },
      {
        "title" : "КДЦ «МЕДСИ»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603313,
        "merkerLng": 36.601398
      },
      {
        "title" : "МК Семейный доктор",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603824,
        "merkerLng": 36.592693
      },
      {
        "title" : "Медицинский центр «Атлас»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.612333,
        "merkerLng": 36.516913
      },
      {
        "title" : "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.643053,
        "merkerLng": 36.582496
      },
      {
        "title" : "КДЦ «МЕДСИ»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.606313,
        "merkerLng": 36.661398
      },
      {
        "title" : "МК Семейный доктор",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603824,
        "merkerLng": 36.592693
      },
      {
        "title" : "Медицинский центр «Атлас»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.610333,
        "merkerLng": 36.576913
      },
      {
        "title" : "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603053,
        "merkerLng": 36.581496
      },
      {
        "title" : "КДЦ «МЕДСИ»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603313,
        "merkerLng": 36.601398
      },
      {
        "title" : "МК Семейный доктор",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.603824,
        "merkerLng": 36.592693
      },
      {
        "title" : "Медицинский центр «Атлас»",
        "address": "Москва, Мичуринский проспект д. 6",
        "telShort": "7 (495) 212 ****",
        "tel": "7 (495) 212 1111",
        "site": "http://medsi.ru/clinics/belorusska",
        "merkerLat": 50.610333,
        "merkerLng": 36.576913
      }
    ]
  }, {
    "id": "1",
    "title": "Волгоград",
    "lat" : 48.710632,
    "lng" : 44.514210,
    "zoom": 14,
    "filial": ["Волгоград", "Волгоград"]
  }, {
    "id": "2",
    "title": "Воронеж",
    "filial": ["Воронеж", "Воронеж"]
  }, {
    "id": "3",
    "title": "Екатеринбург",
    "filial": ["Екатеринбург", "Екатеринбург"]
  }, {
    "id": "4",
    "title": "Железноводск",
    "filial": ["Железноводск", "Железноводск"]
  }, {
    "id": "5",
    "title": "Ижевск",
    "filial": ["Ижевск", "Ижевск"]
  }, {
    "id": "6",
    "title": "Иркутск",
    "filial": ["Иркутск", "Иркутск"]
  }, {
    "id": "7",
    "title": "Казань",
    "filial": ["Казань", "Казань"]
  }, {
    "id": "8",
    "title": "Калуга",
    "filial": ["Калуга"]
  }, {
    "id": "9",
    "title": "Краснодар",
    "filial": ["Краснодар", "Краснодар"]
  }, {
    "id": "10",
    "title": "Красноярск",
    "filial": ["Красноярск", "Красноярск"]
  }, {
    "id": "11",
    "title": "Липецк",
    "filial": ["Липецк", "пецк"]
  }, {
    "id": "12",
    "title": "Набережные Челны",
    "filial": ["Набережные Челны", "Набережные Челны"]
  }, {
    "id": "13",
    "title": "Нижний Новгород",
    "filial": ["Нижний Новгород", "Нижний Новгород"]
  }, {
    "id": "14",
    "title": "Новороссийск",
    "filial": ["Новороссийск", "Новороссийск"]
  }, {
    "id": "15",
    "title": "Новосибирск",
    "filial": ["Новосибирск", "qweqeqweqwe", "11111111111111"]
  }
];

var id,
$marker = [],
filials = [],
zoom,
infowindow,
centerLat,
centerLng;


var icon = 'static/img/content/marker.png';
var iconHighlight = 'static/img/content/marker-hover.png';
var contentHTML = $('.hiden-map-info').html();
var maxInfoWidth = $('.map-module').width() * .3 > 300 ? $('.map-module').width() * .3 : 300;


$(document).ready(function() {

  $('.filial__item').each(function () {
    var text = $(this).text();
    if($(this).text().length > 50){
      text = $(this).text().substring(0,50) + '...' ;
      $(this).text(text);
    }

  });
  /*--*/
  $('.filial__item').on('click', function () {
    $('.filial__item').removeClass('is-active');
    $(this).addClass('is-active');
  });
  /*--*/

  $('.filial').mCustomScrollbar({});

  select();


  $('.js-relocate .select__item').on('click', function () {
      var goTo = $(this).parents('.js-relocate').data('relocate');
      relocate(goTo);
  });

  $('.select__box').mCustomScrollbar({});

  $(document).on('click', function(el){
    var childr = $('.select').find('*');

    if($(el.target).is(childr) == false ){
      $('.select').removeClass('is-active');
      $('.select__box').slideUp(100);
    }
  });
  /*- -*/

  $('.map-btns .btn').removeClass('is-active');
  $('.btn-map').addClass('is-active');


  $('.map-btns').on('click','.btn', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    if($('.btn-list').hasClass('is-active')){
      $('.filial, .map-aside').addClass('is-active');
    } else{
      $('.filial, .map-aside').removeClass('is-active');
    }
  });


});/*- docready -*/


$('.select__item').on('click', function () {
  id = $(this).data('id');
  var town = $(this).find('span').text();
  // centerLat = findLat(this.value, cities);
   const matchArray = findMatches(town, cities);

   const citiesList = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    zoom = place.zoom;
    centerLat = place.lat;
    centerLng = place.lng;
    for (var i = place.filial.length - 1; i >= 0; i--) {
      filials.push(place.filial[i]);
    }

  });
   if($('#map').length){
    initMap();
  }

});


function relocate(item) {
  var relocate = item || $(this).data('relocate');
  var location = window.location.href;
  var pageName = location.split("/").slice(-1)[0];

  window.location.href = window.location.href.replace(pageName,relocate);
}

function select() {
  $(".js-select").each(function(){
    var select_list = $(this).children(".js-select-list");
    $(this).click(function(event){
      $(".js-filter").removeClass("is-active");
      $(".js-filter-list").removeClass('is-active').hide();

        var $self = $(this);

        if ($(this).hasClass("is-active")) {
            setTimeout(function () {
              $self.removeClass('is-active');
            }, 400);
            select_list.slideUp(100);
        } else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").removeClass('is-active').hide();
            select_list.slideDown("fast");
            $(this).addClass("is-active");
        }

      event.stopPropagation();
    });

    select_list.find("li").click(function(event) {
      var id = $(this).attr("data-id");
      var content = $(this).html();
      select_list.parent().find(".js-select-text").html(content);
      id = select_list.parent().find(".js-select-input").val(id);
      select_list.slideUp(100);
      select_list.parents(".js-select").removeClass("is-active");
      event.stopPropagation();
    });
  });
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.title.match(regex);
  });
}


// if($('#map').length){
  function initMap() {
    var $lat = centerLat || 55.756491;
    var $lng = centerLng || 37.812185;
    var marker;
    var centerMap = {lat: $lat , lng: $lng};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoom || 15,
      center: centerMap
    });

    if(filials.length){
      for (var i = filials.length - 1; i >= 0; i--) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(filials[i].merkerLat, filials[i].merkerLng) ,
          icon: icon,
          map: map
        });
      } /*-for-*/
    }/*- if -*/


    infowindow = new google.maps.InfoWindow({
      content: contentHTML,
      maxWidth: maxInfoWidth,
      zIndex: 300
    });

    google.maps.event.addListener(infowindow, 'closeclick', function() {
      marker.setIcon(icon);
    });


    google.maps.event.addListener(marker, 'click', function() {
      this.setIcon(iconHighlight);
      infowindow.setContent(contentHTML);
      infowindow.open(map, this);
    });

  }



$('#map').on('click touchstart','.show-tel', function () {
  var text = $(this).parent('.map__row').find('.map__tel').data('tel');

  $(this).parent('.map__row').find('.map__tel').text(text);
});




