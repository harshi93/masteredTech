$(function(){

	$('#success').hide(); //hides message after
	$('#startover').addClass('hoverOut')

	var score = 0;

	$('#bobhead').click(function(){
		score++; //increments value score 

		$('#score').text(score); //updates value score
		$('#success').show('slow').fadeOut(2000); //fades out message
	});

	// the function will set the value to zero once we hover over element with id
	//startover

	$('#startover').hover(function(){ 
		score = 0; //hoverIn function
		$('#score').text(score); //update score to zero

		$('#startover').addClass('hoverIn').remove('hoverOut'); 
		//the function above adds class hoverIn and removes hoverOut
		// hoverIn and hoverOut are anonymous function

	}, function() {

		//this hoverOut function
		// the function removes hoverIn and adds hoverOut
		$('#startover').removeClass('hoverIn').addClass('hoverOut');
	});
});

