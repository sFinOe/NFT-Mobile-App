var express = require("express");
var app = express();
const db = require("./models");
const routes = require("./routes");

app.use(express.json());

// protect server path with whitelist

app.use(routes);

// lunch a local server that is going to performe an action when get an http request

db.sequelize
  .sync()
  .then((result) => {
    var server = app.listen(8383, function () {
      var host = server.address.address;
      var port = server.address().port;
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
