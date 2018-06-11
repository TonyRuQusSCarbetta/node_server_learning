const express = require("express");
const app = express();

app.listen(3001);

app.get('/testroute', function (req, res) {
  console.log(req.query);
  res.send({
    message: 'hey',
    success: true
  });
});

//http verbs or CRUD to memorize
//get, put, post, delete
