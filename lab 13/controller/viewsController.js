const Robofriend = require('../model/robofriendsModel');
const Information = require('../model/informationModel');

exports.injectInformation = (req, res, next) => {
    req.information = Information.getAll();
    req.robofriends = Robofriend.getAll();
    next();
};

exports.getOverview = (req, res, next) => {
    res.render('overview.ejs', {
        robofriends: req.robofriends,
        requests: req.information,
    });
};
