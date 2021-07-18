const express = require("express");
const app = express();
const path = require("path");

const authorize = (req, res, next) => {
  const dayNow = new Date().getDay();
  const timeNow = new Date().getHours() + 2;
  console.log(timeNow, dayNow);
  if (timeNow > 9 && timeNow <= 00 && dayNow <= 6 && dayNow > 0) {
    next();
  } else {
    res
      .status(401)
      .send(
        "<h1>The web application is only available during working hours</h1>"
      );
  }
};

app.use([authorize, express.static("./public")]);

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
