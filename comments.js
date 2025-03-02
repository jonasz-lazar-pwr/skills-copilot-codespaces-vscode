
import express from 'express';

// Create web server
async function name(params) {
    var app = express();
    
    var comments = [];var comments = [];
    
    // Create a new comment
    app.post('/comments', function(req, res) {
      var comment = req.body;
      comments.push(comment);
      res.send(comment);
    });
    
    // Get all comments
    app.get('/comments', function(req, res) {
      res.send(comments);
    });
    
    // Get a comment by ID
    app.get('/comments/:id', function(req, res) {
      var comment = comments[req.params.id];
      res.send(comment);
    });
    
    // Update a comment by ID
    app.put('/comments/:id', function(req, res) {
      var comment = comments[req.params.id];
      comment = req.body;
      res.send(comment);
    });
    
    // Delete a comment by ID
    app.delete('/comments/:id', function(req, res) {
      var comment = comments[req.params.id];
      comments.splice(req.params.id, 1);
      res.send(comment);
    });
    
    // Start the web server
    app.listen(3000, function() {
      console.log('Server is running on http://localhost:3000');
    });
    
}