// LibraryEntryView.js - Defines a backbone view class for the entries
// that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td> <img class = "playSong" src="https://android-ui-utils.googlecode.com/hg-history/9472134d092f3375aa9cf767d6a4b2eca561c0ba/asset-studio/dist/res/clipart/icons/av_add_to_queue.svg" height="42" width="42"></td>'),

  events: {
    'click .playSong': function() {
      // this.model.play();
      this.model.enqueue();
    },
    'click .queueSong': function() {
      this.model.enqueue(); //Update this method!!
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
