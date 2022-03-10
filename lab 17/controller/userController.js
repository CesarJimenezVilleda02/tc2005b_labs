const User = require('../model/userModel');

exports.get_login = (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario,
    });
};

exports.login = (req, res, next) => {
    if (req.body.name) {
        req.session.name = req.body.name;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
};

exports.logout = (req, res, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};
