if($('.questions').length ) {

$(document).ready(function () {

	$('.meter-ui').slider({
      range: "min",
      min: 0,
      max: $('.meter__end').text(),
      value: $value,
      slide: function( event, ui ) {
        $( ".meter__start" ).text( ui.value );
      }
    });
  $( ".meter__start" ).text( $( ".meter-ui" ).slider( "value" ) );


  $('.btn-next').on('click', nextTest);

  $('.btn-back').on('click', prevTest);



});//docready

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

function getPageNum(val) {
	if($('.questions-resurs').length){
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

			  if(points < 15){
			  	index = 0;
			  }else if(15 > points > 21) {
			  	index = 1;
			  } else {
			  	index = 2;
			  }

				var buildChart = initChart();

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
}

function nextTest(e) {
	e.preventDefault();
	if($('.questions-resurs').length){
		var latter = $('#question-' + $value).find('.radio__input:checked').data('point');
		latters[''+latter] +=1;

	} else {
		var value = $('#question-' + $value).find('.radio__input:checked').data('point');
		answer.push(+value);
	}
	console.log(latters);

	var newValue = ++$value ;
	var slideQuestion = spinQuestion(newValue);
}

function prevTest() {
	if($('.questions-resurs').length){
		var latter = $('#question-' + $value).find('.radio__input:checked').data('point');

		for (key in latters) {
			// console.log("Ключ: " + key + " значение: " + latters[key]);
			if(latters[key] > 0){
				latters[key] -=1;
			}
		}

		// console.log(latters);

	} else {
		answer.pop();
	}

	var newValue = --$value;
	var slideQuestion = spinQuestion(newValue);
}

function spinQuestion(arg) {
	$( ".meter-ui" ).slider( "value", arg);
	$('.question').removeClass('is-active');
	$('#question-'+arg).addClass('is-active');
	$( ".meter__start" ).text( $( ".meter-ui" ).slider( "value" ) );
	$( ".title__big span" ).text( $( ".meter-ui" ).slider( "value" ) );
	var page = getPageNum(arg);
}

function initChart() {
  var value = 42 - points;

  var data = {
    datasets: [{
    		backgroundColor: ['#004e73' ,'#d2d2d2'],
        data: [points, value]
    }],
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
      	  display: false,
      	},
      	cutoutPercentage: 64
      }
  });
}

function initbigChart() {
	var a = latters.a;
	var b = latters.b;
	var c = latters.c;
	var d = latters.d;
	var e = latters.e;
  var data = {
  	labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{
    		backgroundColor: ['#ff0028' ,'#9d9d9d','#ffb51c','#004e73','#009de1'],
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
		      fontSize:  18,
		      fontFamily: '"helveticaneuecyrromanwebfont", Arial, sans-serif',
		    },
      	cutoutPercentage: 50
      }
  });

}

function showMore() {
	var a = latters.a;
	var b = latters.b;
	var c = latters.c;
	var d = latters.d;
	var e = latters.e;

	var zerro = 0;

	var biggestNum = Math.max(a, b, c, d, e);

	for(var key in latters) {
		if (latters[key] == biggestNum){
			zerro += biggestNum;
		}
	}

	if(zerro > biggestNum) {
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

}

}// end if