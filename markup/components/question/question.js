
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

function getPageNum(val) {
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


function nextTest(e) {
	e.preventDefault();
	var value = $('#question-' + $value).find('.radio__input:checked').data('point');
	answer.push(+value);
	// console.log(answer);

	var newValue = ++$value ;
	var slideQuestion = spinQuestion(newValue);
}

function prevTest() {
	answer.pop();
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