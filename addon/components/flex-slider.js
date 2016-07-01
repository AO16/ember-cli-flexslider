import Ember from 'ember';
import layout from '../templates/components/flex-slider';

export default Ember.Component.extend({
  classNames: ['flexslider'],

  layout,
  slides: null,
  end: false,

  init() {
    this._super(...arguments);
    Ember.run.scheduleOnce('afterRender', this, 'setupFlexbox');
  },

  setupFlexbox() {
    const options = this.getProperties('animation', 'animationLoop', 'prevText', 'nextText', 'slideshow');

    options.start = ({ currentSlide, count }) => this.set('end', (currentSlide === (count - 1)));
    options.before = ({ animatingTo, count }) => this.set('end', (animatingTo === (count - 1)));

    this.$().flexslider(options);
  },

  teardownFlexbox: function() {
    this.$().flexslider('destroy');
  }.on('willDestroyElement')

});
