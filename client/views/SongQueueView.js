// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",



  initialize: function() {

    //first it renders it on the screen
    this.render();

     //sets up listeners for any changes to the queue Model
    this.collection.on('change', function(collection){
      this.render();
    }, this);
  },



  //we need some method here that will add a song to the SongQueue.js collection
  //
  addSong: function(song){
    this.model = song;
    this.render();
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


// // LibraryView.js - Defines a backbone view class for the music library.
// var LibraryView = Backbone.View.extend({

//   tagName: "table",

//   initialize: function() {
//     this.render();
//   },

//   render: function(){
//     // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
//     // see http://api.jquery.com/detach/
//     this.$el.children().detach();

//     this.$el.html('<th>Library</th>').append(
//       this.collection.map(function(song){
//         return new LibraryEntryView({model: song}).render();
//       })
//     );
//   }

// });
