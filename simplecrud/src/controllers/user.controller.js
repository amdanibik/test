'use strict';
const User = require('../models/user.model');
exports.findAll = function(res){
    User.findAll(function(err, user){
        console.log('controller');
        if (err) res.send(err);
        console.log('res',user);
        res.send(user);
    });
};

exports.create = function(req, res){
    const new_user = new User(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: 'Please Provide all required fielr'});
    } else {
        User.create(new_user, function(err, user){
            if(err) res.send(err);
            res.json({error:false, message:"User added successfully",data:user});
        });
    }
};

exports.findById = function(req, res){
    User.findById(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.update = function(req, res){
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: 'Please provide all required field'});
    } else{
        User.update(req.params.id, new User(req.body), function(err, user){
            if(err) res.send(err);
            res.json({error:false, message: 'user successfully added'});
        });
    }
};

exports.delete = function(req, res){
    User.delete(req.params.id, function(err, user){
        if(err) res.send(err);
        res.json({error:false, message: 'user successfully deleted'});
    });
};