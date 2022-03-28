const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors =require('cors');

require('./mongoose');

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);


app.listen(3003, function(){
    console.log('Serwer słucha http://localhost:3003/api');
});