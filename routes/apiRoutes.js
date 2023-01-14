const express = require('express');  // imports express
const apiRouter = express.Router();  // 
const fs = require('fs');  // gives access to file system module
const path = require('path');
const uuid = require('uuid');  // imports uuid npm package

// this is the GET route to load the index file when only the api url is entered; for example http://localhost:3001
htmlRouter.get('*', (req, res) => {   // when GET localhost:3001, index.html is displayed
res.sendFile(path.join(__dirname, '..', '/develop/public/index.html'));
});

// this is the GET route to read all notes from db.json file when api/notes is in the url; for example http://localhost:3001/notes
apiRouter.get('/notes', (req, res) => {
    let data = fs.readFileSync(path.join(__dirname, '..', '/develop/db/db.json'));
    // response is the data parsed as json
    res.json(JSON.parse(data));
    });
  
module.exports = apiRouter;