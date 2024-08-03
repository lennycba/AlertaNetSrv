const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {createServer} = require('http')
const fileUpload = require("express-fileupload");
const cors = require("cors");
const mainRouter = require("./Routes");
require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}
server.use(cors(corsOptions));

server.use((req, res, next) => {
  res.setHeader(
    "Set-Cookie",
    "cross-site-cookie=whatever; SameSite=None; Secure"
  );
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use( fileUpload ( { 
  useTempFiles : true , 
  tempFileDir : '/tmp/' 
} ) ) ;

server.use(mainRouter);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server

//fillDb();