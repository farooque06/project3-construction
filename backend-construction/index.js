const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryRoute = require('./routes/category');
const positionRoute = require('./routes/position');
const employeeRoute = require('./routes/employee');
const dashboardRoute = require('./routes/dashboard');


const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userRoute);
app.use('/category',categoryRoute);
app.use('/position',positionRoute);
app.use('/employee',employeeRoute);
app.use('/dashboard',dashboardRoute);


module.exports = app;