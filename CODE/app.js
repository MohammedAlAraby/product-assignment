const express = require('express');
const debug = require('debug')('App');
const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();
const homeRouter = require('./src/routers/homeRouter');
const productsRouter = require('./src/routers/productsRouter');
const adminRouter = require('./src/routers/adminRouter');

app.use(express.static(path.join(__dirname, '/Public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/home', homeRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});