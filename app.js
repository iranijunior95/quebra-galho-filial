const express = require('express');
const router = require('./router');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public/src_site/'));
app.use(router);

//Rodar Servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta: '+3000);
});