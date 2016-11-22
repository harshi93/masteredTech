/*jQuery selectors allows us to grab different elements of DOM using CSS syntax,
jQuery increases the way we select and navigate through the DOM*/

$(function(){
	//By id
	$('first').addClass('highlight');

	//By element
	$('p').addClass('highlight');

	//By class
	$('.chosen').addClass('highlight');

	//Perform Combination
	$('#first, .chosen').addClass('highlight');

	// will highlight all the elements that are odd numbered as indexing in jQuery
	//begins from 0

	$('li:even').addClass('highlight');

	// will highlight all the elements that are even numbered as indexing in jQuery
	//begins from 0


	$('li:odd').addClass('highlight');

	//Will highlight elements with id = three

	$('li:contains("Three")').addClass('highlight');

	//Will highlight elements before elements with id = three

	$('li:contains("Three")').prev().addClass('highlight');

	// will highlight all elements related to the parent of element with id = three 

	$('li:contains("Three")').parent().addClass('highlight');

	// will highlight 1 child of nth item in any list

	$('li:nth-child(1)').addClass('highlight');

	// will highlight paragraphs with name = mySecondPara

	$('p[name = "mySecondPara"]').addClass('highlight');

	// will highlight all paragraphs except for the one with name = mySecondPara

	$('p[name != "mySecondPara"]').addClass('highlight');

	// another way of doing same thing as mentioned immediately above but with use of
	// not function

	$('p').not('[name]').addClass('highlight');

	// will highlight all element having <h1-h6> tags
	$(':header').addClass('highlight');

	// will dynamically replace content of the paragraph tag with no children

	$('p:empty').text('Hey');
})