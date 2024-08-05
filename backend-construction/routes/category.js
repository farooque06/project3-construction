const express = require('express');
const connection = require('../connection');
const router = express.Router();

var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/addCategory', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let category = req.body;
    query = "insert into category (name) value(?)";
    connection.query(query, [category.name], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Category Added Succesfully." });
        } else {
            return res.status(500).json(err);
        }
    })
});

router.get('/getAllCategory', auth.authenticateToken, (req, res, next) => {
    var query = "select * from category order by name";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results);
        } else {
            return res.status(500).json(err);
        }
    })
});

router.patch('/updateCategory', auth.authenticateToken, checkRole.checkRole, (req,res, next) => {
    let category = req.body;
    var query = "update category set name=? where id=?";
    connection.query(query, [category.name,category.id],(err,results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Category id does not exist" });
            }
            return res.status(200).json({ message: "Cateegory Updated successfully" })
        } else {
            return res.status(500).json(err);
        }
    })
});

module.exports = router;
