'use strict';

var largePic = 'static/img/general/contraindications.png';
var smallPic = 'static/img/general/contraindications-small.png';
$(window).on('resize', function () {
  if ($(document).width() < 650) {
    $('.js-mobChangePic').attr('src', smallPic);
  } else {
    $('.js-mobChangePic').attr('src', largePic);
  }
});

$(document).ready(function () {
  if ($(document).width() < 650) {
    $('.js-mobChangePic').attr('src', smallPic);
  } else {
    $('.js-mobChangePic').attr('src', largePic);
  }
});
'use strict';

/*- out  click -*/
// $(document).on('click touchstart', function(el){
//  var childr =  $('.js-open') || $('.header__bottom').find('*') ;

//  if( $(el.target).is(childr) == false ){
//    $('.header__bottom, .btn-menu').removeClass('is-active');
//  }
// });
/*--*/

$(document).on('scroll', function () {
    var $win = $(window).height();
    var $doc = $(document).scrollTop();

    var $headerHeight = $('.header').outerHeight();
    var $fixTop = $(document).height() - $win - $headerHeight;

    if ($doc > 0) {
        $('.header').addClass('is-fixed');
    } else {
        $('.header').removeClass('is-fixed');
    }
});
"use strict";

'use strict';

var cities = [{
  "id": "0",
  "title": "Белгород",
  "lat": 50.609409,
  "lng": 36.578795,
  "zoom": 14,
  "filial": [{
    "title": "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603053,
    "merkerLng": 36.581496
  }, {
    "title": "КДЦ «МЕДСИ»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603313,
    "merkerLng": 36.601398
  }, {
    "title": "МК Семейный доктор",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603824,
    "merkerLng": 36.592693
  }, {
    "title": "Медицинский центр «Атлас»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.610333,
    "merkerLng": 36.576913
  }, {
    "title": "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603053,
    "merkerLng": 36.581496
  }, {
    "title": "КДЦ «МЕДСИ»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603313,
    "merkerLng": 36.601398
  }, {
    "title": "МК Семейный доктор",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603824,
    "merkerLng": 36.592693
  }, {
    "title": "Медицинский центр «Атлас»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.612333,
    "merkerLng": 36.516913
  }, {
    "title": "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.643053,
    "merkerLng": 36.582496
  }, {
    "title": "КДЦ «МЕДСИ»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.606313,
    "merkerLng": 36.661398
  }, {
    "title": "МК Семейный доктор",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603824,
    "merkerLng": 36.592693
  }, {
    "title": "Медицинский центр «Атлас»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.610333,
    "merkerLng": 36.576913
  }, {
    "title": "Управление делами Президента РФ Федеральное Государственное бюджетное учреждение Объединенная Больница с Поликлиникой",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603053,
    "merkerLng": 36.581496
  }, {
    "title": "КДЦ «МЕДСИ»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603313,
    "merkerLng": 36.601398
  }, {
    "title": "МК Семейный доктор",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.603824,
    "merkerLng": 36.592693
  }, {
    "title": "Медицинский центр «Атлас»",
    "address": "Москва, Мичуринский проспект д. 6",
    "telShort": "7 (495) 212 ****",
    "tel": "7 (495) 212 1111",
    "site": "http://medsi.ru/clinics/belorusska",
    "merkerLat": 50.610333,
    "merkerLng": 36.576913
  }]
}, {
  "id": "1",
  "title": "Волгоград",
  "lat": 48.710632,
  "lng": 44.514210,
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
}];

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

$(document).ready(function () {

  $('.filial__item').each(function () {
    var text = $(this).text();
    if ($(this).text().length > 50) {
      text = $(this).text().substring(0, 50) + '...';
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

  $(document).on('click', function (el) {
    var childr = $('.select').find('*');

    if ($(el.target).is(childr) == false) {
      $('.select').removeClass('is-active');
      $('.select__box').slideUp(100);
    }
  });
  /*- -*/

  $('.map-btns .btn').removeClass('is-active');
  $('.btn-map').addClass('is-active');

  $('.map-btns').on('click', '.btn', function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
    if ($('.btn-list').hasClass('is-active')) {
      $('.filial, .map-aside').addClass('is-active');
    } else {
      $('.filial, .map-aside').removeClass('is-active');
    }
  });
}); /*- docready -*/

$('.select__item').on('click', function () {
  var _this = this;

  id = $(this).data('id');
  var town = $(this).find('span').text();
  // centerLat = findLat(this.value, cities);
  var matchArray = findMatches(town, cities);

  var citiesList = matchArray.map(function (place) {
    var regex = new RegExp(_this.value, 'gi');
    zoom = place.zoom;
    centerLat = place.lat;
    centerLng = place.lng;
    for (var i = place.filial.length - 1; i >= 0; i--) {
      filials.push(place.filial[i]);
    }
  });
  if ($('#map').length) {
    initMap();
  }
});

function relocate(item) {
  var relocate = item || $(this).data('relocate');
  var location = window.location.href;
  var pageName = location.split("/").slice(-1)[0];

  window.location.href = window.location.href.replace(pageName, relocate);
}

function select() {
  $(".js-select").each(function () {
    var select_list = $(this).children(".js-select-list");
    $(this).click(function (event) {

      select_list.slideDown("fast");
      $(this).addClass("is-active");

      event.stopPropagation();
    });

    select_list.find("li").click(function (event) {
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
  return cities.filter(function (place) {
    // here we need to figure out if the city or state matches what was searched
    var regex = new RegExp(wordToMatch, 'gi');
    return place.title.match(regex);
  });
}

// if($('#map').length){
function initMap() {
  var $lat = centerLat || 55.756491;
  var $lng = centerLng || 37.812185;
  var marker;
  var centerMap = { lat: $lat, lng: $lng };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom || 15,
    center: centerMap
  });

  if (filials.length) {
    for (var i = filials.length - 1; i >= 0; i--) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(filials[i].merkerLat, filials[i].merkerLng),
        icon: icon,
        map: map
      });
    } /*-for-*/
  } /*- if -*/

  infowindow = new google.maps.InfoWindow({
    content: contentHTML,
    maxWidth: maxInfoWidth,
    zIndex: 300
  });

  google.maps.event.addListener(infowindow, 'closeclick', function () {
    marker.setIcon(icon);
  });

  google.maps.event.addListener(marker, 'click', function () {
    this.setIcon(iconHighlight);
    infowindow.setContent(contentHTML);
    infowindow.open(map, this);
  });
}

$('#map').on('click touchstart', '.show-tel', function () {
  var text = $(this).parent('.map__row').find('.map__tel').data('tel');

  $(this).parent('.map__row').find('.map__tel').text(text);
});
"use strict";
"use strict";

var pppBtn = $(".js-ppp");
var closeBtn = $(".js-close");
// const openBtn = $(".js-open");
var formBtn = $('.form__btn');
var formCheckBox = $('.agreement__checkbox');

formCheckBox.on('click', getAgreement);
closeBtn.on('click', close);
// openBtn.on('click', open);
pppBtn.on('click', ppp);

function getAgreement() {
  console.log($(this));
  if ($(this).is(':checked')) {
    $(this).attr("checked", false);
    formBtn.removeAttr("disabled");
  } else {
    $(this).attr("checked", true);
    formBtn.attr("disabled", "");
  }
}

function close(e) {
  e.preventDefault();
  var closeName = $(this).data('close');
  var parentName = $(this).data('parent');
  var closeEl = $("." + closeName);
  var parentEl = $("." + parentName);
  closeEl.css({ 'display': 'none' });
  parentEl.css({ 'display': 'none' });
}

function open(e) {
  e.preventDefault();
  var openName = $(this).data('open');
  var openEl = $("." + openName);
  openEl.css({ 'display': 'block' });
}

function ppp(e) {
  e.preventDefault();
  var openName = $(this).data('open');
  var docHeight = $(document).height() + "px";
  var openEl = $("." + openName);
  var ppp = $(".ppp");
  ppp.attr('style', 'display: block; height: ' + ("" + docHeight));
  // console.log(docHeight);
  openEl.css({ 'display': 'block' });
}

$(document).ready(function () {
  var docHeight = $(document).height() + "px";

  $(".js-open").on('click', function (e) {
    e.preventDefault();
    var openName = $(this).data('open');
    var openEl = $("." + openName);

    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
      openEl.removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      openEl.addClass('is-active');
    }
  });

  if ($('.js-autoppp').length) {
    setTimeout(function () {
      $('.ppp').attr('style', 'display: block; height: ' + ("" + docHeight));
      $('.js-autoppp').css({ 'display': 'block' });
    }, 2000);
  }
});
'use strict';

if ($('.questions').length) {
  var getPageNum = function getPageNum(val) {
    if ($('.questions-resurs').length) {
      switch (val) {
        case 1:
          $('#pre-question').slideDown();
          $('.btn-back').hide();
          break;
        case 2:
          $('#pre-question').slideUp();
          $('.btn-back').show();
          break;
        case 10:
          $('.btn-next').html('<span>Посмотреть результаты</span><i class="icon-help"></i>');
          break;
        case 11:
          var index = showMore();

          $('.js-question-section').hide();
          $('.js-result-section').show();

          $('.result').eq(index).addClass('is-active');
          var buildChart = initbigChart();
          break;
        default:
          break;
      }
    } else {
      switch (val) {
        case 1:
          $('#pre-question').slideDown();
          $('.btn-back').hide();
          break;
        case 2:
          $('#pre-question').slideUp();
          $('.btn-back').show();
          break;
        case 14:
          $('.btn-next').html('<span>Посмотреть результаты</span><i class="icon-help"></i>');
          break;
        case 15:
          for (var i = answer.length - 1; i >= 0; i--) {
            points += answer[i];
          }

          if (points < 15) {
            index = 0;
          } else if (points > 21) {
            index = 2;
          } else if (points > 15) {
            index = 1;
          } else {
            console.log('Это не обычный индекс');
          }

          var buildChart = initChart(index);

          $('.result__diagramm_points').each(function () {
            $(this).text(points);
          });
          $('.js-question-section').hide();
          $('.js-result-section').show();
          $('.result').eq(index).addClass('is-active');
          break;
        default:
          break;
      }
    }
  };

  var nextTest = function nextTest(e) {
    e.preventDefault();
    if ($('.questions-resurs').length) {
      var latter = $('#question-' + $value).find('.radio__input:checked').data('point');
      latters['' + latter] += 1;
    } else {
      var value = $('#question-' + $value).find('.radio__input:checked').data('point');
      answer.push(+value);
    }
    // console.log(latters);

    var newValue = ++$value;
    var slideQuestion = spinQuestion(newValue);
  };

  var prevTest = function prevTest() {
    if ($('.questions-resurs').length) {
      var latter = $('#question-' + $value).find('.radio__input:checked').data('point');

      for (key in latters) {
        // console.log("Ключ: " + key + " значение: " + latters[key]);
        if (latters[key] > 0) {
          latters[key] -= 1;
        }
      }

      // console.log(latters);
    } else {
      answer.pop();
    }

    var newValue = --$value;
    var slideQuestion = spinQuestion(newValue);
  };

  var spinQuestion = function spinQuestion(arg) {
    $(".meter-ui").slider("value", arg);
    $('.question').removeClass('is-active');
    $('#question-' + arg).addClass('is-active');
    $(".meter__start").text($(".meter-ui").slider("value"));
    $(".title__big span").text($(".meter-ui").slider("value"));
    var page = getPageNum(arg);
  };

  var initChart = function initChart(arg) {
    var value = 42 - points;

    var data = {
      datasets: [{
        backgroundColor: ['#004e73', '#d2d2d2'],
        data: [points, value]
      }]
    };

    index = arg;
    // console.log(index + ' = indexxx');

    var ctx = $('.result__chart').get(index).getContext('2d');

    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        cutoutPercentage: 64
      }
    });
  };

  var initbigChart = function initbigChart() {
    var a = latters.a;
    var b = latters.b;
    var c = latters.c;
    var d = latters.d;
    var e = latters.e;
    var data = {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [{
        backgroundColor: ['#ff0028', '#9d9d9d', '#ffb51c', '#004e73', '#009de1'],
        data: [a, b, c, d, e]
      }]
    };

    var ctx = $('.result__chart').get(index).getContext('2d');

    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        pieceLabel: {
          render: 'label',
          fontColor: '#fff',
          fontSize: 18,
          fontFamily: '"helveticaneuecyrromanwebfont", Arial, sans-serif'
        },
        cutoutPercentage: 50
      }
    });
  };

  var showMore = function showMore() {
    var a = latters.a;
    var b = latters.b;
    var c = latters.c;
    var d = latters.d;
    var e = latters.e;

    var zerro = 0;

    var biggestNum = Math.max(a, b, c, d, e);

    for (var key in latters) {
      if (latters[key] == biggestNum) {
        zerro += biggestNum;
      }
    }

    if (zerro > biggestNum) {
      return index = 5;
    } else {
      switch (biggestNum) {
        case latters.a:
          return index = 0;
          break;
        case latters.b:
          return index = 1;
          break;
        case latters.c:
          return index = 2;
          break;
        case latters.d:
          return index = 3;
          break;
        case latters.e:
          return index = 4;
          break;
        default:
          return index = 5;
          break;
      }
    }
  };

  $(document).ready(function () {

    $('.meter-ui').slider({
      range: "min",
      min: 0,
      max: $('.meter__end').text(),
      value: $value,
      slide: function slide(event, ui) {
        $(".meter__start").text(ui.value);
      }
    });
    $(".meter__start").text($(".meter-ui").slider("value"));

    $('.btn-next').on('click', nextTest);

    $('.btn-back').on('click', prevTest);
  }); //docready

  var index = 0;
  var $value = 1;
  var points = 0;
  var answer = [];
  var latters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  };
} // end if
"use strict";