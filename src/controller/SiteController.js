const getHome = (req, res) => {

    const dados = {
        titulo: 'Home',
        tela: './pages/home'
    };

    return res.render(process.cwd()+'/src/view/view_site/layout', {dados: dados});
};

const getLogin = (req, res) => {

    const dados = {
        titulo: 'Login',
        tela: './pages/login',
        css: ['./css/view_login.css'],
        js: ['./js/script_view_login.js']
    };

    console.log(__dirname);

    return res.render(__dirname+'view/view_site/layout', {dados: dados});
}; 

module.exports = {
    getHome,
    getLogin
};