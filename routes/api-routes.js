const db = require('../models');

// ROUTING

module.exports = function(app) {
  app.get('/api/products', function(req, res) {
    console.log("Hi")
    db.Product.findAll({}).then(function(rows) {
     console.log("rows")
      res.json(rows)
    }).catch(function(error) {
      console.log(error)
      res.json({ error: error });
    });
  });
  // POST Request
   app.post('/api/products', function(req, res) {
    db.Product.create(req.body).then(function(rows) {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error })
    });
  });
  // GET Request
  // Responds with just the requested product at the referenced id
  app.get('/api/products/:id', function(req, res) {
    db.Product.find({ where: { id: req.params.id }})
      .then(function(data){
        res.json(data);
      }).catch(function(error) {
        res.json({ error: error });
      });
  });
  // PUT Request
  app.put('/api/products/:id', function(req, res) {
    db.Product.update(
      req.body,
      { where: { id: req.params.id } }
    ).then(function() {
      db.Product.findAll({}).then(function(rows) {
        res.json(rows)});
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
  // DELETE Request

  app.delete('/api/products/:id', function(req, res) {
    db.Product.destroy({ 
      where: { id: req.params.id } 
    }).then(function() {
      res.json({ success: true });
    }).catch(function(error) {
      res.json({ error: error });
    });  
  });

};