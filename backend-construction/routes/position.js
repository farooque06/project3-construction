const express = require('express');
const connection = require('../connection');
const router = express.Router();

var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/add', auth.authenticateToken, checkRole.checkRole, (req, res, next) => {
    let position = req.body;
    query = "insert into job_position (name) value(?)";
    connection.query(query, [position.name], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Position Added Sucessfully" });
        } else {
            return res.status(500).json(err);
        }
    })
});

module.exports = router;