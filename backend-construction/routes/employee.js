const express = require('express');
const connection = require('../connection');
const router = express.Router();

var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/addEmployee', auth.authenticateToken, checkRole.checkRole, (req, res) => {
    let employee = req.body;
    query = "insert into employee (firstName,lastName,email,phone,category_id,position_id) values(?,?,?,?,?,?)";
    connection.query(query, [employee.firstName, employee.lastName, employee.email, employee.phone, employee.category_id, employee.position_id], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Employee Added Sucessfully" });
        } else {
            return res.status(500).json(err);
        }
    });
});

router.get('/getAllEmployee', (req, res, next) => {
    // var query = "select e.id,e.firstName,e.lastName,e.email,e.phone,c.is as category_id,p.id as position_id,c.name as categoryName,p.name as PositionName form category as c INNER JOIN category as c where c.category_id =c.id";
    const query = `
    SELECT 
        e.id, e.firstName, e.lastName, e.email, e.phone, 
        c.id as category_id, c.name as categoryName,
        p.id as position_id, p.name as positionName
    FROM 
        employee e
    INNER JOIN 
        category c ON e.category_id = c.id
    INNER JOIN 
        job_position p ON e.position_id = p.id`;
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    });

});

router.get('/getEmployeeByCategory/:id', (req, res, next) => {
    const categoryId = req.params.id;
    const query = `
    SELECT 
    e.id,e.firstName,e.lastName,e.email,e.phone,
    c.id as category_id,c.name as categoryName,
    p.id as position_id,p.name as positionName
    FROM
       employee e
    INNER JOIN
       category c ON e.category_id = c.id
    INNER JOIN
        job_position p ON e.position_id = p.id
    WHERE 
    e.category_id =?
    `;
    connection.query(query, [categoryId], (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    })

});


router.get('/getEmployeeId/:id', (req, res, next) => {
    const employeeId = req.params.id;
    const query = `
     SELECT 
     e.id,e.firstName,e.lastName,e.email,e.phone,
     c.id as category_id,c.name as categoryName,
     p.id as position_id,p.name as positionName
     FROM
        employee e
     INNER JOIN
        category c ON e.category_id = c.id
     INNER JOIN
         job_position p ON e.position_id = p.id
     WHERE 
     e.id =?
     `;

    connection.query(query, [employeeId], (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    });
});

router.delete('/deleteEmployee/:id', (req, res, next) => {
    const employeeId = req.params.id;
    var query = "delete from employee where id=?"
    connection.query(query, [employeeId], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Employee Id does not Found" });
            }
            return res.status(200).json({ message: "Employee Deleted Successfully" });
        } else {
            return res.status(500).json(err);

        }
    });

});


module.exports = router;