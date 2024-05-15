const express = require('express');

let acasa = {}

acasa.start = async function(){
  acasa.router = express.Router();
}

acasa.init = function(app , collection){
  acasa.router.get('/acasa', (req, res) => {
    res.render('acasa.ejs');
  })
  acasa.router.get('/', (req, res) => {
    res.redirect('/acasa');
  })
  acasa.router.get('/debug', (req, res) => {
    res.render('auth.ejs');
  })
  app.use("/" , acasa.router)
}

module.exports = acasa;



