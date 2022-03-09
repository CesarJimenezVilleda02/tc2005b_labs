const fs = require('fs');
const Information = require('../model/informationModel');

exports.injectInformation = (req, res, next) => {
    req.information = Information.getAll();
    next();
};

exports.getRequests = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            requests: req.information,
        },
    });
};

exports.postRequest = (req, res, next) => {
    const newReq = new Information(req.session.name, req.body.email, req.body.asunto);
    Information.postReq(newReq);
    res.redirect('/');
};

exports.getRequest = (req, res, next) => {
    const request = Information.getOne(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            request,
        },
    });
};
