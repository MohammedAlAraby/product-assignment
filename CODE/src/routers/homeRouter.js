const express = require('express');
const debug = require('debug')('app:homeRouter');

const homeRouter = express.Router();

homeRouter.route('/').get((req, res) => {
    res.render('home');
    });
    
    module.exports = homeRouter;