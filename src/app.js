const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require("cors")

const app = new express();

app.use(cors({
    Credential: true,
    origin: process.env.ORIGIN
}));
app.use(express.json({limit: '20kb'}));
app.use(express.urlencoded({extended: true, limit: "20kb"}));
app.use(express.static("public"))
app.use(cookieParser());

module.exports = app;