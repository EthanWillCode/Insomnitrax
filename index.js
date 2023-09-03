const { readFile } = require('fs').promises;
const express = require('express');

const app = express();

app.get("/home");
