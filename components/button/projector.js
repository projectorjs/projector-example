// @flow
'use strict';

const babel = require('../../scripts/babel');
const rimraf = require('../../scripts/rimraf');

exports.build = async () => {
  await babel(__dirname);
};

exports.clean = async () => {
  await rimraf(__dirname, 'dist');
};
