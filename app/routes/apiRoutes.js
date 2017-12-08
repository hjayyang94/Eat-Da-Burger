var Burger = require('../models/burger.js');


module.exports = function (app) {
    app.get('/', function (req, res) {
        Burger.findAll({}).then(function (results) {

            if (results === null) {
                return res.render('index', []);

            }
            var list = [];
            for (var i = 0; i < results.length; i++) {
                list.push(results[i].get({ plain: true }));
            }

            var give = {
                burgers: list
            }

            res.render('index', give);
        })
    });

    app.post('/api/new/', function (req, res) {
        console.log(req.body.name)
        console.log('creating burger ' + req.body.name);
        Burger.create({
            name: req.body.name
        })
        console.log('app.post');
        res.redirect('/');
    })

    app.put('/api/update/', function (req, res) {

        Burger.update({
            devoured: true,
        }, {
                where: {
                    name: req.body.name
                }
            })
            .then(function (results) {
                console.log(results);
                console.log('reached update');

                res.redirect('/');
            })
    })


}
