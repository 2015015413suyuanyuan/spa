var http = require('http');
var fs = require('fs');

var documentRoot ='../MIS';

var server = http.createServer(function(req,res){
  var url = req.url;
  var file = documentRoot+url;
  console.log(url);
  fs.readFile(file,function(err,data){
    if(err){
      res.writeHead(404,{
        'content-type':'text/html;charset="urf-8"'
      });
      res.write('<h1>404错误<h1>');
    }
    else{
      res.writeHeader(200,{
        'content-type':'text/html;charset="utf-8"'
      });
      res.write(data);
      res.end();
    }
  });
}).listen(8080);
console.log('服务开启成功');
