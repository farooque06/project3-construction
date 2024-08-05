const express = require('express');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.get('/getDetails', auth.authenticateToken,(req, res,next)=> {
    var employeeCount;
    var cateegoryCount;
    var positionCount;
    var userCount;
    var engneerCount;
    var artechEngneerCount;
    var labourCount;
    var healperCount;


    var query = "select count(id) as cateegoryCount from category";

    connection.query(query, (err, results) => {
        if (!err) {
            cateegoryCount = results[0].cateegoryCount;
        } else {
            return res.status(500).json(err);
        }
    })

    var query = `
    SELECT COUNT(e.id) as engneerCount
    FROM employee e
    INNER JOIN job_position jp ON e.position_id = jp.id
    WHERE jp.name = 'Engneer'`;

    connection.query(query, (err, results) => {
        if (!err) {
            engneerCount = results[0].engneerCount;
        } else {
            return res.status(500).json(err);
        }
    });

    var query = `
    SELECT COUNT(e.id) as artechEngneerCount
    FROM employee e
    INNER JOIN job_position jp ON e.position_id = jp.id
    WHERE jp.name = 'architectural engineer'`;

    connection.query(query, (err, results) => {
        if (!err) {
            artechEngneerCount = results[0].artechEngneerCount;
        } else {
            return res.status(500).json(err);
        }
    });

    var query = `
    SELECT COUNT(e.id) as labourCount
    FROM employee e
    INNER JOIN job_position jp ON e.position_id = jp.id
    WHERE jp.name = 'Labour'`;

    connection.query(query, (err, results) => {
        if (!err) {
            labourCount = results[0].labourCount;
        } else {
            return res.status(500).json(err);
        }
    });

    var query = `
    SELECT COUNT(e.id) as healperCount
    FROM employee e
    INNER JOIN job_position jp ON e.position_id = jp.id
    WHERE jp.name = 'Healper'`;

    connection.query(query, (err, results) => {
        if (!err) {
            healperCount = results[0].healperCount;
        } else {
            return res.status(500).json(err);
        }
    });


    var query = "select count(id) as employeeCount from employee";
    connection.query(query, (err, results) => {
        if (!err) {
            employeeCount = results[0].employeeCount;
        } else {
            return res.status(500).json(err);
        }
    })

    var query = "select count(id) as positionCount from job_position";
    connection.query(query, (err, results) => {
        if (!err) {
            positionCount = results[0].positionCount;
        } else {
            return res.status(500).json(err);
        }
    })

    var query = "select count(id) as userCount from user";
    connection.query(query, (err, results) => {
        if (!err) {
            userCount = results[0].userCount;
          var data = {
            category:cateegoryCount,
            position:positionCount,
            employee:employeeCount,
            user:userCount,
            engneer:engneerCount,
            artechEngneer:artechEngneerCount,
            labour:labourCount,
            healper:healperCount
            }
            return res.status(200).json(data);
        } else {
            return res.status(500).json(err);
        }
    })

});


module.exports = router;