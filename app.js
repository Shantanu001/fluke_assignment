const express = require("express");
const app = express();
const { response } = require("express");
const axios = require("axios");
const port = process.env.PORT || 8080;


app.get("/categories/:category", function (req, res) {
  console.log("category-->", req.params.category);

  let url = "https://www.cubyt.io/data/categories/" + req.params.category;
  axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response.data);
      if (response.data.length != 0) res.send(response.data);
      else res.send([]);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      console.log("Process completed");
    });
});

app.listen(port, function () {
  console.log(`app running on port ${port}`);
});
