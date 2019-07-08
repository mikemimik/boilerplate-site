'use strict';

const chalk = require('chalk');
const dedent = require('dedent');
const ip = require('ip');

const divider = chalk.gray('-----------------------------------');

const logger = {
  error: (err) => {
    console.error(err);
  },
  appStarted: (port, host) => {
    console.log(`Server started! ${chalk.green('✓')}`);
    console.log(dedent`
      ${chalk.bold('Access URLs:')}
      ${divider}
      Localhost: ${chalk.magenta(`http://${host}:${port}`)}
            LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
      ${divider}
      ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
