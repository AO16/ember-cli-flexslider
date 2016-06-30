module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies
  description: '',

  afterInstall: function(options) {
    return this.addBowerPackagesToProject([{ name: 'flexslider', target: '^2.6.1' }]);
  }

};
