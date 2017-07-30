/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-vivus',

  options: {
    nodeAssets: {
      vivus: {
        vendor: {
          srcDir: 'dist',
          destDir: 'vivus',
          include: ['vivus.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/vivus/vivus.js');

    this.import('vendor/vivus/shim.js', {
      type: 'vendor',
      exports: {
        vivus: ['default']
      }
    });
  }
};
