const express = require('express');
const fs = require('fs');

const router = express.Router();

router.use((req, res, next) => {
    req.robofriends = JSON.parse(fs.readFileSync(`${__dirname}/data/robofriends.json`));
    next();
});

router
    .route('/')
    .get((req, res, next) => {
        res.status(200).json({
            status: 'success',
            data: {
                requests: req.robofriends,
            },
        });
    })
    .post((req, res, next) => {
        req.body.id = req.robofriends.length + 1;
        req.body.picture = `https://robohash.org/${req.body.string}`;
        req.robofriends.push(req.body);
        fs.writeFileSync(
            `${__dirname}/data/robofriends.json`,
            JSON.stringify(req.robofriends)
        );
        res.status(200).json({
            status: 'success',
            message: 'Data updated on server',
            data: {
                robofriends: req.robofriends,
            },
        });
    });

router.route('/:id').get((req, res, next) => {
    const robofriend = req.robofriends.filter(
        (infoReq) => infoReq.id == req.params.id
    )[0];
    res.status(200).json({
        status: 'success',
        data: {
            robofriend,
        },
    });
});

module.exports = router;
