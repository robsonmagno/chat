var express = require('express');
var app = express();
var port = 3000;

require('./router')(app);

app.listen(port, function() {
  console.log('app listening on port ' + port);
});