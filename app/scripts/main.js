console.log('\'Allo \'Allo!');

$(document).ready(function(){

	$('#show-nav').on('click', function(){
		if($('.nav-display').css('visibility') == 'hidden') {
			$('.nav-display').css('visibility', 'visible');
		} else {
			$('.nav-display').css('visibility', 'hidden');
		}
	});

	$('#close-nav').on('click', function(){
		$('.nav-display').css('visibility', 'hidden');
	});

	$(".nav-display a").bind("click", function(e){
	 
		e.preventDefault();
		var location = $(this).attr("href");
		 
		$('html, body').animate({
			scrollTop: $(location).offset().top
		}, 1500);
	});

	$('.print').click(function(){
		window.print();
	});
});
