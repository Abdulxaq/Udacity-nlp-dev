const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.listen(8083, function() {
    console.log('Example app listening on port 8083!')
})
    
    
    
