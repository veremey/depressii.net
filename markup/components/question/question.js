
$(document).ready(function () {

	$('.meter-ui').slider({
      range: "min",
      min: 0,
      max: 14,
      value: $value,
      slide: function( event, ui ) {
        $( ".meter__start" ).text( ui.value );
      }
    });
  $( ".meter__start" ).text( $( ".meter-ui" ).slider( "value" ) );


  $('.btn-next').on('click', nextTest);

  $('.btn-back').on('click', prevTest);


});//docready

var $value = 1;

function getFirstPage(val) {
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
			$('.js-question-section').hide();
			$('.js-result-section').show();
			break;
		default:
			break;
	}
}

function nextTest(e) {
	e.preventDefault();
	var newValue = ++$value ;
	var slideQuestion = spinQuestion(newValue);
}

function prevTest() {
	var newValue = --$value;
	var slideQuestion = spinQuestion(newValue);
}

function spinQuestion(arg) {
	$( ".meter-ui" ).slider( "value", arg);
	$('.question').removeClass('is-active');
	$('#question-'+arg).addClass('is-active');
	$( ".meter__start" ).text( $( ".meter-ui" ).slider( "value" ) );
	$( ".title__big span" ).text( $( ".meter-ui" ).slider( "value" ) );
	var page = getFirstPage(arg);
}