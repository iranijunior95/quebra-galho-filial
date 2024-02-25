const router = require('express').Router();

const siteController = require('./controller/SiteController');
const logarController = require('./controller/LogarController');
const usuariosController = require('./controller/UsuariosController');

const usuariosMiddleware = require('./middleware/UsuariosMiddleware');

//===== ROTAS SITE =====//
router.get('/', siteController.getHome);
//===== ROTAS SITE =====//

//===== ROTAS API =====//

//Rotas Login
router.post('/api/v1/logar', logarController.logar);

//Rotas Usuarios
router.post('/api/v1/usuarios/cadastrar_usuario', usuariosMiddleware.validarBody, usuariosController.inserirUsuario);

//===== ROTAS API =====//

module.exports = router;