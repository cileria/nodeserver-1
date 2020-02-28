const express = require('express');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/somedata', function(req, res) {
    return res.send({
        result: randomstring.generate(20)
    });
});

app.post('/somedata', function(req, res) {
    if(!req.body.data) {
        return res.send({ error: 'data is required' });
    }

    return res.send({
        somedata: 'posted: ' + randomstring.generate(20),
    });
});

app.delete('/somedata/:id', function(req, res) {
    return res.send({
        somedata: 'deleted: ' + randomstring.generate(20),
    });
});

console.log('started somedata-server');

app.listen( 3001 );
