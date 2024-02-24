const express = require('express');
const router = require('./src/router');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(router);

//Rodar Servidor
app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta: '+process.env.PORT);
});