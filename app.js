const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Routes = require("./routes/routes");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH, DELETE,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-File-Retension, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.use(express.json());

app.use("/files", express.static(path.join("files")));

app.use("/api", Routes);

app.listen(5000);
