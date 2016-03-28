
var express = require('express');
var app = express();

app.get('/foo', function (req, res) {
  res.json({bar: 'bam'});
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
})