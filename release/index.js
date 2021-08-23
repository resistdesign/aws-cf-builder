require('ts-node/register');
require('./Release')
  .Release()
  .then(() => console.log('COMPLETE'));
