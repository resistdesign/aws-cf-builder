require('ts-node/register');
require('./Deploy')
  .Deploy()
  .then(() => console.log('COMPLETE'));
