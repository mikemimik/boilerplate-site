'use strict';

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const path = require('path');

module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    // const addProdMiddlewares = require('./addProdMiddlewares');
    // addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../config/webpack.dev.babel');
    addDevMiddleware(app, webpackConfig);
  }

  return app;
};

function addDevMiddleware (app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const webpackMiddleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(webpackMiddleware);
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = webpackMiddleware.fileSystem;

  app.get('*', (req, res, next) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}
