const express = require ('express');
const path = require ('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');

const app = express();

app.set('port', port);

app.route('/')

console.log("iniciado")