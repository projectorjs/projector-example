// @flow
'use strict';

const yarn = require('projector-yarn');
const path = require('path');

module.exports = async (cwd /*: string */) => {
  await yarn.run({
    name: 'babel',
    flags: [
      path.join(cwd, 'src'),
      '--copy-files',
      '--out-dir',
      path.join(cwd, 'dist'),
    ],
  });
};
