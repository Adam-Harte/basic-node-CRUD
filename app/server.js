const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

require('./routes') (app, {});

MongoClient.connect(db.url, (err, database) => {
   if (err) return console.log(err);
   db = database.db("basic-crud-app");
   require('./routes')(app, db);
   app.listen(8000, () => {
      console.log('We are live on port 8000');
   });
});

