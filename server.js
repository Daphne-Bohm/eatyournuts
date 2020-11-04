//*************************************************** IMPORT **************************************************************//
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const items = require('./items.json');
const port = process.env.PORT || 3003;
const app = express();

//************************************************ FRONT END ************************************************************//
// View engine
app.set('view engine', 'hbs');
app.use('/views', express.static(path.resolve(__dirname, 'views')));

// Stylesheets, images, JS, etc.
app.use(express.static(__dirname + '/public'));

// Partials
hbs.registerPartials(__dirname + '/views/partials');

//************************************************* ROUTES ************************************************************//

// HOMEPAGE
app.get('/', (req, res) => {

   res.render('index', {
      items: items
   });

})

app.get('/', (req, res) => {
    res.render('index');
})


app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/cart', (req, res) => {
    res.render('cart');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/terms-and-conditions', (req, res) => {
    res.render('terms-and-conditions');
})


//*******************************************************PORT********************************************************//
const server = app.listen(port, () =>{
    console.log(`Server is up and running on ${port}`);
})