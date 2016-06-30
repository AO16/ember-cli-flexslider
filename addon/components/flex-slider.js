import Ember from 'ember';
import layout from '../templates/components/flex-slider';

export default Ember.Component.extend({
  classNames: ['flexslider'],

  layout,
  slides: null,

  init() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'setupFlexbox');
  },

  setupFlexbox() {
    const options = this.getProperties('animation', 'animationLoop');
    this.$().flexslider(options);
  },

  teardownFlexbox: function() {
    this.$().flexslider('destroy');
  }.on('willDestroyElement')

});
