var express = require('express');
var app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/template/index.html");
});
app.post('/create', function (req, res) {
  console.log(JSON.stringify(req.body));
  console.log(JSON.stringify(req.headers));
  res.redirect(`/annex/?telephone=${req.body.telephone}`);
});
app.get('/annex', function (req, res) {
  res.send(`<h1>Your phone number, ${req.query.telephone}</h1>`);
});
app.listen(5000);