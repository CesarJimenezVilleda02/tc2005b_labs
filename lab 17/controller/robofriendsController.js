const Robofriend = require('../model/robofriendsModel');

exports.injectRobofriends = async (req, res, next) => {
    req.robofriends = await Robofriend.getAll();
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

exports.postRobofriend = async (req, res, next) => {
    const newRobofriend = new Robofriend(req.body.name, req.body.bio, req.body.picture);
    await Robofriend.postRobot(newRobofriend);
    res.redirect('/');
};

exports.getRobofriend = async (req, res, next) => {
    const robofriend = await Robofriend.getOne(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            robofriend,
        },
    });
};
