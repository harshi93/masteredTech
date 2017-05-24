var os = require('os');

var TempDir = os.tmpDir();
var hostName = os.hostname();
var Type = os.type();
var platform = os.platform();
var architecture = os.arch();
var releaseVersion = os.release();
var SysUptime = os.uptime();
var LoadAvg = os.loadavg();
var TotalMemory = os.totalmem();
var FreeMemory = os.freemem();
var NoOfCPUS = JSON.stringify(os.cpus());
var NetworkInterfaces =  JSON.stringify(os.networkInterfaces());
var EndOfLine = os.EOL;

console.log("Hostname: "+hostName+"\n"+"Platform:"+ platform+"\n"+"architecture:"+architecture+"\n"+"Type:"+Type+"\n"+"Release: "+releaseVersion+
"\n"+"TotalUptime:"+ SysUptime+"\n"+"Load Average:"+LoadAvg+"\n"+"Total Memory:"+TotalMemory+"\n"+"Free Memory:"+FreeMemory+"\n"+"No of CPU's:\n"
+NoOfCPUS+"\n\n"+"Network Interfaces:\n"+NetworkInterfaces+"\n\n"+"End of Line Marker:"+EndOfLine);