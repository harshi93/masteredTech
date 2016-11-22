//XML HTTP Request

// One of the main goals of mordern applicatino is to mimic locally installed
// applications; but the catch is that a lot of data and resources you need are
// on the server; Allows for raw calls to the server; It was designed to support 
// Outlook Web Access but later mozilla created their; implmentation of XML HTTP 
// Request which eventually became the standard

// Sample XML HTTP Request

var result = null;

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	//see if the operation is successfully completed
	if(xhr.readyState == 4 && xhr.status == 200){ // 4= we got data back and
		// 200 = shows operation was success
		//retrieve result
		result = xhr.resultText;
	}
}

//Open the connection
xhr.open("GET", "url"); //GET = is HTTP request method it can either be GET or POST

//Send the request
xhr.send();

//Example 

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset ="utf-8" />
	<link href ="style.css" rel="stylesheet" />
	<script>include reference to jquery</script>
	<script>
		$('#load-data').click(function(){
			var xhr = new new XMLHttpRequest();
			xhr.onreadystatechange = function(){
			
			//see if the operation is successfully completed
			if(xhr.readyState == 4 && xhr.status == 200){ // 4= we got data back and
			
			// 200 = shows operation was success
			//retrieve result
			
			result = xhr.resultText;
		}
	}

		//Open the connection
		xhr.open("GET", "./Demo.txt"); //GET = is HTTP request method it can either be GET or POST

		//Send the request
		xhr.send();
});
	</script>
</head>
<body>
	<div>
		<button type="button" id="load-data" class="btn"> Load data</button>
	</div>
	<div id="output"></div>
</body>
</html>

//Note, because we didn't want to worry about opening or closing or monitoring
// connections or everytime having send data we developed AJAX 


// AJAX

//Asynchrounous JavaScript and XML; set of commonly used standards and technologies
//for simplifying server calls; still uses XMLHttpRequest behind the scenes and provides
//helper methods such as $.get to retrieve text and $.getJSON to retrieve a JSON object

//Example 

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset ="utf-8" />
	<link href ="style.css" rel="stylesheet" />
	<script>include reference to jquery</script>
	<script>
		$('#load-data').click(function(){
			$.get('./Demo.txt').done(function(data){
				// The data from the server is inside the variable data
				$('#output').text(data);
			});
		});
	</script>
</head>
<body>
	<div>
		<button type="button" id="load-data" class="btn"> Load data</button>
	</div>
	<div id="output"></div>
</body>
</html>

// Even though AJAX simplified our task by automating things it was still one way
// path in a sense that may be it be XML or AJAX use of either would only allow us
// to communicate to the server and not the other way round, which lead to the birth
// of Web Sockets.

// Web Sockets
/*Are a component of HTML5 and help create truly interactive sites, so that server is 
able to update the client; it's similar to normal socket development as client can call
server and server can call client; also similar to web worker as it uses messaging
system and most importantly these are supported most modern browser*/

//Sample Call

//create the socket
var socket = new WebSocket('url');

// recieve message from server
socket.onmessage = function(e){
	$('#output').append('<li>' + e.data + '</li>');
}

socket.onopen = function(){ 
// the function notifies us once the socket is open for use
	$('#send-message').removeAttr('disabled');
}

// send a message to the server
socket.send('hello world!');

//sockets can take a few seconds to open up
// web sockets don't use http and instead use web socket protocol because of it's 
// fast load times and light weightedness
// if you wish to use web socket on port 80 the shorthand used will be ws
//but if we wish to use web socket on
// port 443 it would be wss 

//WebSockethandler.cs
/*all the header files*/
namespace Module4
{
	public class WebSockethandler
	{
		private readonly WebSocket socket;

		public WebSockethandler(WebSocket socket)
		{
			this.socket = socket;
		}

		public async Task Start()
		{
			while(socket.State) == WebSocketState.Open)
			{
				var message = await RecieveMessage();

				if(message != null) ProcessMessage(message);
			}
		}

		private async Task<string> RecieveMessage()
		{
			var buffer = new ArraySegment<byte>(new byte[1024]);
			var result = await socket.RecieveAsync(buffer, CancellationToken.None);
			var message = Encoding.UTF8.GetString(buffer.Array, buffer.Offset, result.Count);
			return message;
		}

		private void SendMessage(string message)
		{
			lock(socket)
			{
				var buffer = new ArraySegment<byte>(Encoding.UTF8, GetBytes(message));
				socket.SendAsync(buffer, WebSocketMessageType.Text, true, CancellationToken.None).Wait();
			}
		}

		private void ProcessMessage(string message)
		{
			message += "PROCESSED!!";
			SendMessage(message);

			Task.Delay(1000).ContinueWith(_ => SendMessage("Another message sent"));
		}
	}
}

//Example.html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset ="utf-8" />
	<link href ="style.css" rel="stylesheet" />
	<script>include reference to jquery</script>
	<script>
		$('#load-data').click(function(){
			var socket = new WebSocket('ws://localhost:3000/socket.ashx');
				
				socket.onmessage = function(e){
					$('#output-list').append('<li>'+ e.data + '</li>');
				}

				socket.onopen = function(){
					socket.send($('#message').val());
				}
		});		
	</script>
</head>
<body>
	<div>
		<label for="message">Message: </label>
		<input type ="text" class="form-control" id="message" />
	</div>
	<div>
		<button type="button" id="load-data" class="btn"> Load data</button>
	</div>
	<div id="output"></div>
	<div id="output-list"></div>
</body>
</html>


/*As there was only one method to send message and one event to recieve message
alongside the fact that developers need to take care of serialization considering
use of object and also absence of support for fallback mechanisms if browser doesn't
support web sockets all of this compiled led to the development of signalR*/

// SignalR
/*SignalR is a ASP.NET technology and what it does it hides all of the issues 
mentioned above and gives developers peace of mind and let them just take care of
coding; SignalR needs to be installed via nugget manager and signalR server side
object is known as hub*/

//MessageHub.cs

namespace Module4
{
	public class MessageHub : Hub
	{
		public void ProcessMessage(string message)
		{
			Clients.All.MessageProcessed(message + "PROCESSED!!");
		}
	}
}

//SignalR.html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset ="utf-8" />
	<link href ="style.css" rel="stylesheet" />
	<script>include reference to jquery</script>
	<script>include reference to signalR js file </script>
	<script src="/signalr/hubs">this is specific to this assignment</script>
	<script>
		$(function()
		{
			var messageHub = $.connection.messageHub;
			messageHub.client.messageProcessed = function(message)
			{
				$('#output').append('<li>' + message + '</li>');
			}
			$.connection.hub.start().done(function()
			{
				$('#send-message').removeAttr('disabled');
				$('#send-message').click(function()
				{
					var message = $('message').val();
					messageHub.server.processedMessage(message);
				});
			});
		});		
	</script>
</head>
<body>
	<div>
		<label for="message">Message: </label>
		<input type ="text" class="form-control" id="message" />
	</div>
	<div>
		<button type="button" id="load-data" class="btn"> Load data</button>
	</div>
	<div id="output"></div>
	<div id="output-list"></div>
</body>
</html>

