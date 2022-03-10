const fs = require('fs');
const Information = require('../model/informationModel');

exports.injectInformation = async (req, res, next) => {
    req.information = await Information.getAll();
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

exports.postRequest = async (req, res, next) => {
    const newReq = new Information(req.session.name, req.body.email, req.body.asunto);
    await Information.postReq(newReq);
    res.redirect('/');
};

exports.getRequest = async (req, res, next) => {
    const request = await Information.getOne(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            request,
        },
    });
};
