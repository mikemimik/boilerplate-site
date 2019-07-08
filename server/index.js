'use strict';

const express = require('express');
const path = require('path');

const applyMiddleware = require('./middleware');
const logger = require('./utils/logger');

const app = express();

applyMiddleware(app, {
  outputPath: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
});

const host = process.env.HOST || null;
const port = process.env.PORT || 3000;
const prettyHost = host || 'localhost';

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
