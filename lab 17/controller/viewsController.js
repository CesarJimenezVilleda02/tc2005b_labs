const Robofriend = require('../model/robofriendsModel');
const Information = require('../model/informationModel');

exports.checkLogin = (req, res, next) => {
    if (!req.session.name) res.redirect('/login');
    else {
        console.log(`${req.session.name} has logged in to the application`);
        next();
    }
};

exports.injectInformation = async (req, res, next) => {
    req.information = await Information.getAll();
    req.robofriends = await Robofriend.getAll();
    next();
};

exports.getOverview = (req, res, next) => {
    res.render('overview.ejs', {
        robofriends: req.robofriends,
        requests: req.information,
    });
};

exports.getPreguntas = (req, res, next) => {
    res.render('preguntas.ejs');
};

exports.getLogin = (req, res, next) => {
    res.render('login.ejs');
};
