// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model: SongModel,
  //define what actually happens with that whole collection: enqueuing, dequing
  //operating on the whole collection of models
  //
  //all calls trickle through to here
  //
  ////actually functionaliy of enqueue, such as play this song

  initialize: function(){
    //adds the listeners upon initialization?
    //why do we need that final 'this'?
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);

  },

  enqueue: function(song){
   if( this.length === 1 ){
    this.playFirst();
   }
  },

  dequeue: function(song){
    this.remove(song);
  },

  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(){
    this.shift();
    if(this.length >=1){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }


});
