var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-flexslider',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/flexslider/jquery.flexslider-min.js');
    app.import(app.bowerDirectory + '/flexslider/flexslider.css');
  },

  treeForPublic: function(tree) {
    return funnel('bower_components', { srcDir: '/flexslider/fonts', destDir: 'assets/fonts' });
  }

};
