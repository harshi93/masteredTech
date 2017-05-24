var http = require('http');

/*var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method:'GET'
};

console.log('Going to make request...');
*/
/*
var  req = http.request('http://www.google.com', function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();
*/

/*
var  req = http.request(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();
*/

// we get 300 because these command do not support 
// automatic redirects 
var options = {
    host: 'www.pluralsight.com',
    port: 80,
    path: '/',
    method:'GET'
};

console.log('Going to make request...');

http.get(options, function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});