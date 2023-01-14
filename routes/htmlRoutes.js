const express = require('express');  // importing express
const htmlRouter = express.Router();  // creating instance of express
const path = require('path');  // import path module for node.js

htmlRouter.get('/notes', (req, res) => {   // when GET localhost:3001/notes, notes.html is displayed
  res.sendFile(path.join(__dirname, '..', '/develop/public/notes.html'));
});



module.exports = htmlRouter;