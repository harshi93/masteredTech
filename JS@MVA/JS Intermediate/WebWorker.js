// Web Workers are a means of simulating what is known to be as threading in other
// languages; due to performance and security concerns javascript doesn't support
// threading on default basis 

// What is a web worker?
/*A web worker is a process through which you can tell a browser that you have a
script that's likely to take some time and you would like it to run asynschronously
it is html component*/

//How it is implemented?
/*Though it is easy to implement, you should know that it has no control over the 
thread itself; it is implemented through a messaging system where browser send message 
to worker and worker processes it and sends response back to the browser; 
also it's important to know that worker do not possess the ability to update the UI;
the web worker also has limited access to the resources in the system or relative
to browser for example web worker cannot access DOM and window object from 
synchronization and security purposes*/

//For Example
//Calling Script

var worker = new Worker('scriptName.js');
worker.addEventListener('message', function(e){
	//recieve messages from worker
	var message = e.data;// the data named property holds the message
	alert(message);
});
//send message to worker
worker.postMessage('hello, worker!');

//Worker Script

//the script executes immediately on load
self.addEventListener('message', function(e){
	//recieve messages from page
	var message = e.data;
	//send message to page
	self.postMessage(e.data + '- Processed!');
});

//for Demo.html
<html>
<head>
	<title></title>
	<script>include reference to jQuery</script>
	<script>
	var worker = new Worker('./Demo.js');
	// do note that onmessage and addEventListener are same in working
	worker.onmessage = function(e){
		var message = e.data;
		$('#message-list').append('<li>' + message + '</li>');
	}

	$('#send-message').click(function(){
		var message = $('message').val();
		worker.postMessage(message);
	});
	</script>
</head>
<body>
	<div>
		<label for ="message">Message: </label>
		<input type="text" id="message" class="form-control" />
		<button type="button" id="send-message" class="btn">send message</button>
	</div>
	<ul id="message-list"></ul>
</body>
</html>

//for Demo.js

	self.onmessage = function(e){
		var message = e.data;
		self.postMessage(message + 'PROCESSED!!');
	}

//in order to run worker you need to run the html file using web server such as IIS
// or apache or samba or nginx

// Web workers can pass any JSON/JavaScript object; workers don't have events for
// start or end but they can be easily implemented

//Stopping a web worker; From page by using worker.terminate();
// from worker using self.close();


//Implementing the same as above using Object constructor

//for Demo.html
<html>
<head>
	<title></title>
	<script>include reference to jQuery</script>
	<script>
	var worker = new Worker('./Demo.js');
	// do note that onmessage and addEventListener are same in working
	worker.onmessage = function(e){
		var message = e.data;
		$('#message-list').append('<li>' + message + '</li>');
	}

	$('#send-message').click(function(){
		var message = $('message').val();
		var messageObject = {message: message};
		worker.postMessage(messageObject);
	});
	</script>
</head>
<body>
	<div>
		<label for ="message">Message: </label>
		<input type="text" id="message" class="form-control" />
		<button type="button" id="send-message" class="btn">send message</button>
	</div>
	<ul id="message-list"></ul>
</body>
</html>

//for Demo.js

	self.onmessage = function(e){
		var messageObject = e.data;
		var message = messageObject.message;
		self.postMessage(message + 'PROCESSED!!');
	}

// How to create START and END events


//for Demo.html
<html>
<head>
	<title></title>
	<script>include reference to jQuery</script>
	<script>
	var worker = new Worker('./Demo.js');
	// do note that onmessage and addEventListener are same in working
	worker.onmessage = function(e){
		var message = e.data;
		$('#message-list').append('<li>' + message + '</li>');
	}

	$('#send-message').click(function(){
		var message = $('message').val();
		var messageObject = {message: message};
		worker.postMessage(messageObject);
	});

	worker.postMessage({status: "START"});
	</script>
</head>
<body>
	<div>
		<label for ="message">Message: </label>
		<input type="text" id="message" class="form-control" />
		<button type="button" id="send-message" class="btn">send message</button>
	</div>
	<ul id="message-list"></ul>
</body>
</html>

//for Demo.js

	self.onmessage = function(e){
		// note === is a sign used for ensuring typechecking and value comparison

		if(messageObject.status === "START"){
			self.postMessage("STARTED!!");
		} else{
		var messageObject = e.data;
		var message = messageObject.message;
		self.postMessage(message + 'PROCESSED!!');	
		}
	}

// note: we cannot use jQuery inside worker as jQuery needs access to 
// which it won't be able to have if it is defined locally
// but there might be libraries which we might be able to use; we need to
// understand that some library may support doing so but it all depends 
// on library and what purpose it serves

// note: you are also not allowed to proritize threading as it simulates
// the environment

//Bad thing with worker and how we solve it?
/*In order to use worker we need to know that we need worker which means
i need to be worried about the scenarios when we can use workers which
shouldn't be the case and instead we should be like i need this to be done
go do it and provide me with output i got something dependent on it more like
black box testing. In order to solve this problem we need to take a look at
deferred and promises*/

//jQuery Deferred
/*allows us to set middle man object and that middle man object will let us
know once it has done its part allowing us to proceed with ours
You can create your own long running options and allow other developers
to register event handlers

The object is basically used to manage long running operations and raise
events on completion or failure, or even when it progress 

How it works?
var deferred = $.Deferred(); -> 
//this is where you will define your task
start your async operation ->
// this will be used by caller or the client 
return deferred.promise(); -> 
// this will notify the caller or the client about any event that may happen
// which in case of success will be
//deferred.resolve();
// and in case of failure will be
deferred.reject();
*/

//Deferred-Worker.js

// this is my server who will send message
self.onmessage =  function(e){

	var startTime = new Date().toTimeString();

	sleep(2000);

	var output = e.data.message + 'processed at' + startTime;
	self.postMessage({message: output});
}

// sleep
function sleep(milliseconds){
	var startingTime = new Date().getTime();
	var stopTime = startingTime + milliseconds;

	while(stopTime >= new Date().getTime()){

	}
}

//Deferred-Client.js

// this is my client who will print message
function processMessage(message){
	var deferred = $.Deferred();


	var worker = new Worker('./4-Deferred-Worker.js');

	worker.onmessage = function(e){
		deferred.resolve(e.data.message);
	}

	worker.postMessage({message: message});

	return deferred.promise();
}

/*Asynchronous Programming
Certain operations can take an unknown amount of time such as making server
calls or working with graphics and certain events are performed at unknown times
such as timed events or web socket. The asynchronous programming allows us to
manage such situations*/

//jQuery Promise
/*jQuery Promise is an implementation of promise pattern in simple words, the 
promise pattern allows developers to register event handler for various event 
or states such as failed, succeeded or in progress

Basically what it does it assign a token for every event handler and once
event is completed it informs us by means of token

The three common promise events are
done - which tells when an event is successful
fail - which tells when an event is unsuccessful
progress - which tells whenever there is a progress

this method
takes there events mentioned above as it's parameter; note that
parameters must be defined in sequence they appear*/

//Example
//Deferred.html
// rest all stays same and you can use Deferred-Client.js
<html>
	<head>
		<title></title>
		<script>include reference to jQuery</script>
		<script>Deferred-Client.js</script>
		<script>
			$(function(){
				$('send-message').click(function(){
					var message = $('#message').val;
					var promise = processMessage(message);
					promise.done(function(data)){
						$('#result-list').append('<li> + data + '</li>');
					})
				});
			});
		</script>
	</head>	
<body>
	<div>
		<label for="message">Message: </label>
		<input type="text" id="message" class="form-control" />
		<button type="button" id="send-message" class="btn">Send message</button>
	</div>
	<div>
		Results:
		<ul id="result-list"></ul>
	</div>
</body>
</html>