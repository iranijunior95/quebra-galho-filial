const getHome = (req, res) => {

    const dados = {
        titulo: 'Home',
        tela: './pages/home',
        css: ['./css/css1.css', './css/css2.css']
    };

    return res.render('../view/view_site/layout', {dados: dados});
};

const getLogin = (req, res) => {

    const dados = {
        titulo: 'Login',
        tela: './pages/login',
        css: ['./css/view_login.css'],
        js: ['./js/script_view_login.js']
    };

    return res.render('../view/view_site/layout', {dados: dados});
}; 

module.exports = {
    getHome,
    getLogin
};