/* globals Vivus */

define('vivus', [], function() {
  'use strict';

  if (typeof FastBoot === 'undefined') {
    return {
      default: Vivus
    };
  }

  return { default: undefined };
});
