// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// whoami requests
app.get("/api/whoami", (req, res) => {
  const ip = req.ip;
  const software = req.header('User-Agent');
  const language = req.header('Accept-Language');
  res.send({"ipaddress": ip,"language" : language, "software": software})
})

// listen for requests :)
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});