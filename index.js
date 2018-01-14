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
