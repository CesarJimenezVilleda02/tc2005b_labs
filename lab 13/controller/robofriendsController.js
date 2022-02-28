const fs = require('fs');
const Robofriend = require('../model/robofriendsModel');

exports.injectRobofriends = (req, res, next) => {
    req.robofriends = Robofriend.getAll();
    next();
};

exports.getRobofriends = (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            requests: req.robofriends,
        },
    });
};

exports.postRobofriend = (req, res, next) => {
    const newRobofriend = new Robofriend(req.body.name, req.body.bio, req.body.picture);
    Robofriend.postRobot(newRobofriend);
    res.status(200).json({
        status: 'success',
        message: 'Data updated on server',
        data: {
            newRobofriend,
        },
    });
};

exports.getRobofriend = (req, res, next) => {
    const robofriend = Robofriend.getOne(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            robofriend,
        },
    });
};
