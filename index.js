/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-vivus',

  options: {
    nodeAssets: {
      vivus: {
        vendor: {
          include: ['dist/vivus.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/vivus/dist/vivus.js', {
      using: [{ transformation: 'amd', as: 'vivus' }]
    });
  }
};
