SC.initialize({
 client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

SC.resolve("https://soundcloud.com/chancetherapper/sets/chance-the-rapper-acid-rap")
.then(function(response){
  console.log(response)
})

function Jukebox(){
  this.player = SC.stream("/tracks/5278265")
}

var jukebox=new Jukebox();

SC.get("/tracks/5278265").then(function(response){
  document.querySelector("songtitle")
  document.querySelector("artist")
  document.querySelector("art")
});

var playButton =document.querySelector("#play");
var pauseButton=document.querySelector("#pause");


Jukebox.prototype.play= function(){
  this.player.then(function(player){
    player.play();
  })
}

Jukebox.prototype.pause= function(){
  this.player.then(function(player){
    player.pause();
  })
}

playButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.play()
})

pauseButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.pause();
})
