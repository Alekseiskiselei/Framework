const params = require('yargs')
  .scriptName('npm run wdio')
  .option('suite', {
    alias: ['s', 'suite'],
    describe: 'suite name',
    choices: ['smoke', 'general'],
  })
  .option('browser', {
    alias: ['b', 'browser'],
    describe: 'browser name',
    choices: ['chrome', 'firefox'],
  }).argv;

module.exports = params;
