//Unobtrusive JS benefits are 

Usability: the principal suggests, script should be such that it should not require
attention and let user do their work without any worries

Graceful Degradation: the principal suggests, if script happens to be not working it
should just stop working silently without causing any trouble to the user

Accessibility: the principal suggests, firstly the script should be working on all 
sorts of devices, lastly if the script fails it should be able to deliver it's core
content using html and stylesheet

Separation: the principal suggests, the javascript should be separate in a fashion that
if there are changes/failures associated with javascript it should not affect other
script and stylesheet associated with the project

//Unobtrusive JS techniques

Separation of Behavior from Markup

The technique ensures that Markup/Content and javascript are in two separate files 
and not in the same file; this also often termed as separation of concerns

Namespace (aka "Global Abatement")

By default whenever we are writing code in javascript we write in global namespace
which increases the potential of names of variable being collided with other variable
declared at global level from code imported externally or from peer

Especially dangerous when writing libraries intended for use in multiple projects
or using libraries created by other developers who were not so thoughtful as one 
needs to be

Declaring variables at a global level is often termed as polluting the global
namespace; the word namespace refers to scope of the domain

The solution to this problem is creating an object with all of our code, as it sits
at the global scope but is the only thing added at global scope by us a developers
and making functions and variables related to the objects as its property

/* Exemplary code
$(function(){
	alert(window.version);
});


// whenever you use var followed by variable name inside the functions
// the var keyword makes the variable locally accessible by the function

//var version = "1.2";


//singles and patterns is a way where we create an object and attach everything
// to that object

//module patterns and singles and pattern are most important concepts of javascript
var AERTIS = {};

AERTIS.version ="1.2";

*/

Degrading Gracefully

Focuses on thinking about use of JS and how it impacts the webpage if js is turned 
off in a browser. So when manipulating the document object model we should ensure that
we dont need javascript to run to allow user to use the web page. Being a developers
it is our responsibility that added behavior degrades Gracefully on incompatible browser
and also on the ones where javascript is disabled by user

$(function(){

//	$('#clickMe').click(function(){
//		$('#main').append('Seeing this means + is clicked');
//	});
	
	// the line prints the message irrespective of whether js is on users browser or not
	$('#main').append("<img src='plus-8.png' alt='Click me to see the paragraph' id='clickMe' />");
	
	// if js is on the js will seek permission to show content and then on clicking
	// plus sign user will be able to see the message
	$('#clickMe').toggle(function(){
		('#message').show('fast');
		$('#clickMe').attr('src', 'minus-8.png');
	}, function(){
		$('#message').hide('slow');
		$('#clickMe').attr('src', 'plus-8.png');
	});

	// this line hides the message that will be printed in default case which is when
	// js is turned off
	$('#message').hide();
})