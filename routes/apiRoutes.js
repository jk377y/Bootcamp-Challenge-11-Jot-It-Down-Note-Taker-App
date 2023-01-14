const express = require('express');  // imports express
const apiRouter = express.Router();  // creates an instance of the Express object
const fs = require('fs');  // gives access to file system module which allows us to read/write files
const path = require('path');  // gives access to the path module which gives access to file pathing
const uuid = require('uuid');  // imports uuid npm package

// this will happen when the GET api/notes route is executed; read all notes from db.json file when api/notes is in the url; for example http://localhost:3001/notes; then parse the data
apiRouter.get('/notes', (req, res) => {  // when the GET api/notes route is executed
    let data = fs.readFileSync(path.join(__dirname, '..', '/develop/db/db.json'));  // the db.json file will be read also
    res.json(JSON.parse(data));  //  response is the data parsed as json
    });

// this is the POST api/notes route
    apiRouter.post('/notes', (req, res) => {  // 

    });

module.exports = apiRouter;