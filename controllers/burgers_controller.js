var express = require('express');
var router = express.Router();

var sequel = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    var burgerList = sequel.selectAll();
    console.log(burgerList);
    res.render("index", {burgerList});
});


router.post("/", function (req, res) {
    sequel.insertOne(req.body.burger_name)

    res.redirect('/');
});


router.put("/", function (req, res) {
    sequel.updateOne(req.body.name,devoured,1).then(function(res){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        else{
            res.redirect('/')
        }
    })
});

// Export routes for server.js to use.
module.exports = router;
