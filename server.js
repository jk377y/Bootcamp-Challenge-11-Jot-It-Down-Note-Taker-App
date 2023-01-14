const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/develop/public')));
app.use('/api', apiRouter);
app.use('/', htmlRouter);


app.listen(3001, () => {
  console.log(`Server started on port ${PORT}`);
});