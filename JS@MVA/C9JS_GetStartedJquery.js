//Jquery is a library which is written in javascript and simplifies javascript

/*library primarly focuses on four
DOM - provides a consistent cross-browser way of working with the DOM; also provide
simplified technique for accessing elements in the DOM using CSS selectors  

Ajax - provices several methods you can use to exchange data with a web server
using Ajax and easy ways to work with the data that is returned via an Ajax call

Events - solves the DOM ready vs windows.onload dilemma which says that a scenario
may be where your pages loads partially and user starts clicking but nothing happens
and as a result user may have an impression that nothing is happening and which will
also cause page to unresponsive at a point of time 

Also support for simplified event handling model allows us to easily add or remove 
multiple event handler to a single DOM element event

Effects - Has built-in effects and animations; allows us to use plugins for additional
effects and a wide array of other jQuery-based functionality packaged for re-use*/

//shorthand for Jquery =  $


//go through jquery API = api.jquery.com

jQuery(document).ready(function(){
	//startup code goes here
	alert("this works!");
});

	or

$(document).ready(function(){
	//startup code goes here
	alert("this works!");
});

	or

$(function(){
	//startup code goes here
	$("#title").text("ABC");

	$("#first").html("<h2>Great Quotes</h2>");	

	// append and prepend  work inside the given selection

	$("#first").prepend("<h2>Great Quotes</h2>"); // prepend heading above paragraph

	$("#first").appending("<h2>for you to ponder</h2>"); //append heading after the paragraph

	//before, after, insertBefore, insertAfter work OUTSIDE
	//the given selection

	$("#first").attr("href", "http://channel9.msdn.com");	

	$("#first").addClass("standout"); // line implements styles defined in standout 
	//named css class over first named object
	
	alert("this works!");
});

$('.importantText') // returns  all the members of the class
$('#myFirstParagraph') // returns members with following id
$('p') //returns member with following tag

$('<div id = "badge"><img src="badge.gif" alt="Badge earned for achievement"></div>')

$.myCustomMethod = function(){alert('hi')}

jquery.listbox = {
	show: function(){},
	hide: function(){},
	position: function(){},
	initiate: function(){}
};

$('#myFirstParagraph').FadeOut(500).FadeIn(500);

