const express = require('express')
const app = express()
const port = process.env.PORT || 8080; // usefull for deployement
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./apiRoutes'));

app.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

// If we wanted to run our app from here as well we could add the below
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './public/index.html');
// })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
