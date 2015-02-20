// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><img class="removeSong" src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glossy-black-3d-buttons-icons-media/002119-glossy-black-3d-button-icon-media-a-media292-minus3.png" height="42" width="42"></td>'),

  events: {
    'click .removeSong': function() {
      this.model.dequeue();
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
