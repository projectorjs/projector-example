// @flow
'use strict';

const components = require('./components/projector');
const website = require('./website/projector');
const flow = require('./scripts/flow');

exports.build = async () => {
  await clean();
  await Promise.all([
    components.build(),
    website.build(),
  ]);
};

let clean = exports.clean = async () => {
  await Promise.all([
    components.clean(),
    website.clean(),
  ]);
};

exports.test = async () => {
  await flow();
};
