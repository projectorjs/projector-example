// @flow
'use strict';

const spawn = require('projector-spawn');
const path = require('path');

module.exports = async (cwd /*: string */, dir /*: string */) => {
  await spawn('rm', ['-rf', dir], { cwd });
};
