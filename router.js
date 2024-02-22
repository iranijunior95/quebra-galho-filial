const router = require('express').Router();

const siteController = require('./controller/SiteController');
const usuariosController = require('./controller/UsuariosController');

//Rotas Site
router.get('/', siteController.getHome);

router.get('/home', siteController.getHome);

router.get('/login', siteController.getLogin);

//Rotas Adm
router.post('/api/v1/logar', usuariosController.logar);

module.exports = router;