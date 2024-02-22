const router = require('express').Router();

const siteController = require('./controller/SiteController');
const usuariosController = require('./controller/UsuariosController');
const logarController = require('./controller/LogarController');

//Rotas Site
router.get('/', siteController.getHome);

router.get('/home', siteController.getHome);

router.get('/login', siteController.getLogin);

//Rotas Adm
router.post('/api/v1/logar', logarController.logar);

module.exports = router;