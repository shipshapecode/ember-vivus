/*jshint node:true*/
module.exports = {
  description: 'Bower Installs Vivus',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('vivus', '0.3.0');
  }
};
