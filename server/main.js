const express = require('express')
const app = express()

const http = require('http');

const port = 3000;

app.get('/', function(req, res) {
  res.send('Get request to the homepage')
})

app.post('/', function(req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});