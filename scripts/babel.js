// @flow
'use strict';

const yarn = require('projector-yarn');
const path = require('path');

module.exports = async function babel(cwd /*: string */) {
  try {
    await yarn.run({
      name: 'babel',
      flags: [
        path.join(cwd, 'src'),
        '--out-dir',
        path.join(cwd, 'dist'),
        '--copy-files',
        '--colors',
      ],
    });
  } catch (err) {
    throw new Error(err.stderr);
  }
};
