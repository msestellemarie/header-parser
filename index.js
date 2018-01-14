var express = require('express');
var app = express();

app.listen(process.env.PORT || 5000);
app.set('trust proxy', true);
app.get('/', function(req, res){
  res.send(
    {
      "ipaddress": req.ip,
      "language": req.acceptsLanguages()[0],
      "software": req.header('user-agent').match(/\((.+?)\)/)[1]
    }
  );
});

//{"host":"localhost:5000","connection":"keep-alive","cache-control":"max-age=0","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36","upgrade-insecure-requests":"1","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","dnt":"1","accept-encoding":"gzip, deflate, br","accept-language":"en-US,en;q=0.9"}
