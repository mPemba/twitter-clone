$(document).ready(function() {

$('.tweet-compose').on('click', function(){
  $('#tweet-controls').show();
  $('.tweet-compose').css('height', '5em');
});

$('.tweet-compose').on('blur', function(){
  $('.tweet-compose').css('height', '2.5em');
  $('#tweet-controls').hide();
});

var maxCharacters = 140;

$('.tweet-compose').on('keyup keydown', function() {
	var length = $(this).val().length;
	var length = maxCharacters - length;
    $('#char-count').text(length);
    if (length < 11) {
    	$('#char-count').css('color', 'red');
    }
    if (length === 0) {
        $('#char-count').text('disabled', 'disabled');
    }
});





});