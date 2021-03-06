// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    //given code that listens for a change in the current song
    this.model.on('change:currentSong', function(model){
      // console.dir("This is the this dot model: ", this.model);
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    //open question: where should I put stop?
    //
    this.model.on('stop', function(){
      this.playerView.setSong('');
    }, this);



  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
