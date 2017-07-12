// @flow
'use strict';

const yarn = require('projector-yarn');

module.exports = async function flow() {
  try {
    await yarn.run({
      name: 'flow',
      flags: [
        'check',
        '--color',
        'always'
      ],
    });
  } catch (err) {
    throw new Error(err.stdout);
  }
};
