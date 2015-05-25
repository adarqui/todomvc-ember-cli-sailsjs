/*
 * The Ember input helper wouldn't respond to any events/fire any actions.
 * Thus this component..
 * Possible issue: https://github.com/emberjs/ember.js/issues/5433
 */

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  click: function() {
    this.updateStatus();
  },

  updateStatus() {
    this.get('todo').save();
  }
});
