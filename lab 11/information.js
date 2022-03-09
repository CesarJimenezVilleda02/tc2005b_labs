const express = require('express');
const fs = require('fs');

const router = express.Router();

router.use((req, res, next) => {
    req.information = JSON.parse(fs.readFileSync(`${__dirname}/data/information.json`));
    next();
});

router
    .route('/')
    .get((req, res, next) => {
        res.status(200).json({
            status: 'success',
            data: {
                requests: req.information,
            },
        });
    })
    .post((req, res, next) => {
        req.body.id = req.information.length + 1;
        req.information.push(req.body);
        fs.writeFileSync(
            `${__dirname}/data/information.json`,
            JSON.stringify(req.information)
        );
        res.redirect('/')
    });

router.route('/:id').get((req, res, next) => {
    const request = req.information.filter((infoReq) => infoReq.id == req.params.id)[0];
    res.status(200).json({
        status: 'success',
        data: {
            request,
        },
    });
});

module.exports = router;
