const express = require('express');
const debug = require('debug')('app:adminRouter');
const mongoose = require('mongoose');
const product = require('../models/product')

const adminRouter = express.Router();

adminRouter.route('/').get((req, res) => {  

  const url =
    'mongodb+srv://sa2:aM8whq3gddLr2QVw@globamantics.si2vjhh.mongodb.net/Inventory?retryWrites=true&w=majority';
  
  mongoose.connect(url, { useNewUrlParser: true });

  const db = mongoose.connection;
  db.once('open', _ => {
  debug('Database connected:', url);
  
  const prod1 = new product ({
    Id: 1,
    Name: 'Printer',
    Image: '',
    Description: 'hp laser printer'

  });

  prod1.save(function (error, document) {
    if (error) 
      debug(error);
    debug(document);
  });

  const prod2 = new product ({
    Id: 2,
    Name: 'Mouse',
    Image: '',
    Description: 'Logitech mouse'

  });

  prod2.save(function (error, document) {
    if (error) 
      debug(error);
    debug(document);
  });

  const prod3 = new product ({
    Id: 3,
    Name: 'Monitor',
    Image: '',
    Description: 'Samsung monitor'

  });

  prod3.save(function (error, document) {
    if (error) 
      debug(error);
    debug(document);
  });

  const prod4 = new product ({
    Id: 4,
    Name: 'keyboard',
    Image: '',
    Description: 'Logitech keyboard'

  });

  prod4.save(function (error, document) {
    if (error) 
      debug(error);
    debug(document);
  });
});

db.on('error', err => {
  debug(err);
  });
});


module.exports = adminRouter;
