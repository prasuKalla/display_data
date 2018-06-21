var  express = require('express');
var router = express.Router();
var Country = require('../models/dataSchema');

router.post('/create', function(req, res,next){

    var newCountry = new Country({
        name: req.body.name,
        capital: req.body.capital
    });
    newCountry.save(function(err, country){
            if(err)
                res.status(500).json({
                    errmsg: 'err'
                });

            res.status(200).json({
                msg: country
            });
    });
    
});

router.get('/read', function(req, res, next){
    Country.find({}, function(err, countries){
        if(err)
                res.status(500).json({
                    errmsg: 'err'
                });

            res.status(200).json({
                msg: countries
            });
    });
   
});

router.put('/update', function(req, res, next){

    Country.findById(req.body._id, function(err, country){
        if(err)
                res.status(500).json({
                    errmsg: 'err'
                });

           country.name = req.body.name;
           country.capital = req.body.capital;
           country.save(function(err, country){
                if(err)
                    res.status(500).json({
                        errmsg: 'err'
                    });

                res.status(200).json({
                    msg: country
                });
           });
    });
   
});

router.delete('/delete/:id', function(req, res, next){

    Country.finOneAndRemove({_id: req.params.id}, function(err, country){
            if(err)
                res.status(500).json({
                    errmsg: 'err'
                });

            res.status(200).json({
                msg: country
            });
    });
   
});

module.exports = router;