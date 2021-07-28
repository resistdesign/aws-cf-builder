#!/usr/bin/env node

require('ts-node/register');

const Package = require('../package.json');

require('./CLI').CLI(Package);
