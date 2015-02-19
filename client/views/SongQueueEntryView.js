// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td class="playSong">(<%= artist %>)</td><td class="playSong"><%= title %></td><td class="queueSong">Queue</td>'),

  events: {
    'click .playSong': function() {
      this.model.play();
    },
    'click .queueSong': function() {
      this.model.enqueue(); //Update this method!!
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});



// var LibraryEntryView = Backbone.View.extend({

//   tagName: 'tr',

//   template: _.template('<td class="playSong">(<%= artist %>)</td><td class="playSong"><%= title %></td><td class="queueSong">Queue</td>'),

//   events: {
//     'click .playSong': function() {
//       this.model.play();
//     },
//     'click .queueSong': function() {
//       this.model.enqueue(); //Update this method!!
//     }
//   },

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }

// });
