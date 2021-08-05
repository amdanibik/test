'use strict';
var dbConn = require('./../../config/db.config');

var User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
};

User.create = function(newEmp, result){
    dbConn.query("INSERT INTO user set ? ", newEmp, function(err, res){
        if(err){
            console.log("error : ",err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

User.findById = function(id, result){
    dbConn.query("SELECT * FROM user WHERE id ? ", id, function(err, res){
        if(err){
            console.log("error: ",err);
            result(err, null);
        } else{
            result(null, res);
        }
    });
};

User.findAll = function(result){
    dbConn.query("SELECT * FROM user ", function(err,res){
        if(err){
            console.log("error: ",err);
            result(err, null);
        } else {
            console.log('user:',res);
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
    dbConn.query("UPDATE user SET name =?, email=?, age=? WHERE id=?",[user.name,user.email,user.age,id], function(err, res){
        if(err){
            console.log("error: ",err);
            result(err, null);
        } else{
            result(null, res);
        }
    });
};

User.delete = function(id, result){
    dbConn.query("DELETE FROM user WHERE id=?",[id],function(err,res){
        if(err){
            console.log("error: ",err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports= User;