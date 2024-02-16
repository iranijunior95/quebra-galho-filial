const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//Rotas
app.get('/', (req, res) => {
    res.render('../views/pages/site/home');
});

app.get('/home', (req, res) => {
    res.render('../views/pages/site/home');
});

app.get('/contatos', (req, res) => {
    res.render('../views/pages/site/contatos');
});

app.get('/documentacao', (req, res) => {
    res.render('../views/pages/site/documentacao');
});


//Rodar Servidor
app.use(express.static(__dirname+'/public'));
app.listen(port, () => {
    console.log('Servidor rodando na porta: '+port);
});