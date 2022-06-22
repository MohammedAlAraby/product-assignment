const express = require('express');
const debug = require('debug')('app:productsRouter');
const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const product = require('../models/product');
const url = 'mongodb+srv://sa2:aM8whq3gddLr2QVw@globamantics.si2vjhh.mongodb.net/Inventory?retryWrites=true&w=majority';
    
const productsRouter = express.Router();

productsRouter.route('/').get((req, res) => {    
    mongoose.connect(url, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.once('open', _ => {
      debug('Database connected:');
    
    product.find({}, (err, result) => {
      let products = [];
      if (result){
      for (var i in result) {
        products.push(result[i]);
      }
      debug(products);              
      }
      res.render('products', { products });      
    });   
});

db.on('error', err => {
  debug(err);
  });
});

productsRouter.route('/:id').get((req, res) => {
  const id = req.params.id;
  
  (async function mongo() {
    try {        
      mongoose.connect(url, { useNewUrlParser: true });
      debug('Database connected');
                  
      const prod = await product.findOne({ 
          _id: new ObjectID(id) 
        });            

        debug(prod);

      res.render('product', {
        prod
      });
    } catch (error) {
      debug(error.stack);
    }    
  })();                      
});

module.exports = productsRouter;