// @flow
'use strict';

const button = require('./button/projector');
const heading = require('./heading/projector');

exports.build = async () => {
  await Promise.all([
    button.build(),
    heading.build(),
  ]);
};

exports.clean = async () => {
  await Promise.all([
    button.clean(),
    heading.clean(),
  ]);
};
