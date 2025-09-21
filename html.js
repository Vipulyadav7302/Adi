const totalPlayers = 14;  // 0 to 13
const players = [];

function onYouTubeIframeAPIReady() {
  console.log("YouTube API is ready");
  for (let i = 0; i < totalPlayers; i++) {
    players[i] = new YT.Player('player' + i, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }
}

function onPlayerStateChange(event) {
  console.log("Player state changed:", event.data);
  if (event.data === YT.PlayerState.PLAYING) {
    players.forEach(player => {
      if (player !== event.target) {
        console.log("Pausing player:", player.getIframe().id);
        player.pauseVideo();
      }
    });
  }
}
