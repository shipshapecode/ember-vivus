/* global define, self */
(function() {
  function fakeVivus() {
    var error = "Vivus is not available. Either the bower package is missing or your app is in Fastboot Mode.";
    this.to = function() {
      throw Error(error);
    };
    throw Error(error);
  }

  function vendorModule() {
    'use strict';
    return {'default': self['Vivus'] || fakeVivus};
  }

  define('vivus', [], vendorModule);
})();
