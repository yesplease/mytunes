// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    //first it renders it on the screen
    this.render();

    // sets up listeners for any changes to the queue Model
    this.collection.on('add remove', function(){
      this.render();
    }, this);

  },



  render: function() {
    //empty the container of anything
    this.$el.children().detach();

    this.$el.html('<th>Queue</>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

  }

});

