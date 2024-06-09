var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', async (req, res) => {
    request('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', function (error, response, body) {
        if (!error && response.statusCode == 200) {
 
            res.render('create-qr-code', {title: "Example", qr: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'});
        }
    })

    // res.render('index', { title: 'Express' });
});

module.exports = router;