/*The Document Object Model is a hierarchical collection of software object with 
each object representing single html element or single literal string on the web page
The purpos DOM exists is to allow developers to programatically alter the behavior of 
web page using javascript; parsing engine - turns recognizable components in a web page 
into tree of related objects; rendering  engine - utilizes the tree of related objects 
o understand where to position each individual item


The windows.onload method downloads all the items related to a webpage and then does
further actions while this may seem to be great strategy, it has a downside that until
the contents are downloaded nothing will happen and it may happen that user wait time turns 
out to be as long as forever because the content to be downloaded is far too big*/

window.onload = function(){
	var clickMeButton =  document.getElementById('clickMe');
	clickMeButton.onclick = runTheExample;


		//the above code can also be rewritten as following

	document.getElementById('clickMe').onclick = runTheExample;
}


function runTheExample() {
	alert('running the example');
}


function runTheExample(){
	var myElement = document.getElementById('second');

	var myNodeName =  myElement.nodeName;
 
 	//The alert box will basically show the tags associated with element with specified Id
	
	alert('myNodeName'); 
}

if(myElement != null)
{
	alert(myElement.innerHTML); // what this will do is that it will show the html code for the whole line 
}

document.getElementById('Second').innerHTML = "See how I set the text here?";

/*whenever needed to use innerHTML try to replace its use with Jquery*/

var listOfParagraphs = document.getElementByTagName('p'); //gets element where tag equals paragraph

alert(listOfParagraphs.length); //lists total number of elements with paragraph tag

var secondParagraph = listOfParagraph[1]; // lists the content at index 1 in paragraph with id second

alert(secondParagraph.innerHTML);


myElement = document.getElementById('second');

alert(myElement.parentNode.nodeName); // prints the name of parent node 

myElement.childNodes.length; // prints total number of child

myElement.childNodes[0-n]; // allows us to use access child at specific index

myElement.firstChild; // prints the first child

myElement.lastChild; // prints the last child

myElement.nextSibling;

myElement.previousSibling;

var anchor = document.getElementById('myAnchor');

var anchorDestination = anchor.href;

alert(anchorDestination); //url pointed to by href

anchor.href = "http://www.learnvisualstudio.net"; // changes the href current pointed to url to defined url

anchor.setAttribute('href', 'http://www.learnvisualstudio.net');

anchor.getAttribute('href');


