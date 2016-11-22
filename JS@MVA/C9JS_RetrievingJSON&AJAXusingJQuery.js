/*JSON is a type of javascript format that we use to retrieve data from web server
with the help of technology called AJAX and libraries such as jQuery

AJAX - Asynchronous Javascript and XML
A technology that helps in the exchange of data between a web page and web server 
without having the need to do full page refresh by making use of HTTP get or HTTP 
post method

The way jQuery works with making Ajax request is it will make request to allow your
js to say hey i need this function and then we create a function responsible for 
performing certain defined operations when data requested by jQuery comes back which
data will then cause the function to fire thus causing changes

Unlike old times when developer used to send XML between web page and web server, 
these days developers are using JSON for the purpose merely because of the benefit 
that it is Javascript Object Notation that we can work with more easily as a javascript
developer; it's a lively format for transferring data */

$(function(){
	$('#clickMe').click(function() 
	{
		/*
		$.getJSON('C9JS_RD194JSON&AJAX.json', function(data){

			// the getJSON method will fetch data from the web server 
			// the function(data) is the callback function that will fire 
			// once the getJSON method has the data
		
			var item = [];
			$.each(data, function(key, val) {

			// the .each method will look in the collection named data for associated
			// key and value 
				
				items.push('<li id="' + key +'">' + val + '</li>'); 
				// the items.push method will add new element at the end of the array
		
			});

			$('<ul/>', {
				'class' : 'interest-list',
				html: items.join(',') // the items.join will take all the elements
				// of array and will concatenate them; using commas will separate 
				// the elements
			}).appendTo('body'); // the content will appended to the body tag
		});
		*/
		$.ajax({
			url: 'C9JS_RD194JSON&AJAX.json'
			dataType: 'json'
			success: function(data){
				var items = [];

				$.each(data, function(key, val){
					items.push('<li id="' + key + '">' +val + '<li>');
				});
			$('<ul/>', {
				'class' : 'interest-list',
				html: items.join(',') // the items.join will take all the elements
				// of array and will concatenate them; using commas will separate 
				// the elements
			}).appendTo('body'); // the content will appended to the body tag
		   },

		   statusCode:{
		   	404 :function(){
		   		alert('There was a problem with the server, Try again soon')
		   	   }
		   }
		});
	});
});


