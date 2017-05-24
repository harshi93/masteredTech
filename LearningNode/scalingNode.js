/*var exec = require('child_process').exec;

var child = exec('uptime', function(err, stdout, stderr){
    if(err){
        console.log("Error:"+stderr);
    } else{
        console.log('Output is: '+ stdout);
    }
});

console.log("PID is "+child.pid);
*/
/*
var spawn = require('child_process').spawn,
    ps = spawn('ps', ['ax']),
    grep = spawn('grep', ['node']);
    
ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function(data){
    console.log('ps stderr:'+ data);
});

grep.stderr.on('data', function(data){
    console.log('grep stderr:'+ data);
});
*/

var fork = require('child_process').fork;

var child = fork(__dirname + '/honorstudent.js');

child.on('message', function(m){
    console.log('The answer is:', m.answer);
    child.send({cmd: 'done'});
});

child.send({cmd: 'double', number: 20});