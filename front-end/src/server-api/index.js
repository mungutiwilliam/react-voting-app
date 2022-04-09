const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 4000;
const jsonParser = express.json();
const fileName = 'results.json';
var cons = require('consolidate');


app.set('views');
app.engine('html', cons.swig)
app.set('view engine', 'html');


// Allow requests only from this client
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);

// This is a RESTful GET web service
app.get('/results', (request, response) => {
    response.render('results.html');
});

// This is a RESTful POST web service
app.post('/results', jsonParser, (request, response) => {
    data.push(request.body);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
    response.end();
});

app.listen(port);
console.log(`server listening on port ${port}`);