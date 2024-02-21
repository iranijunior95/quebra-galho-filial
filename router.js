const router = require('express').Router();

const siteController = require('./controller/SiteController');

//Rotas Site
router.get('/', siteController.getHome);

router.get('/home', siteController.getHome);

router.get('/login', siteController.getLogin);

module.exports = router;