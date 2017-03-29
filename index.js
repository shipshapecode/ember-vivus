/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-vivus',

  options: {
    nodeAssets: {
      vivus: {
        vendor: ['dist/vivus.js']
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.import('vendor/vivus/dist/vivus.js', {
        using: [{ transformation: 'amd', as: 'vivus' }]
      });
    }
  }
};
