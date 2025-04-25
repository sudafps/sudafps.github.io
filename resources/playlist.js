const playlist = [
  {
    title: "Crank That",
    file: "resources/songs/Crank_That.mp3", 
    artist: "Soulja Boy",
  },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("audio-info");
let currentSongIndex = Math.floor(Math.random() * playlist.length);

function playSong(index) {
  const song = playlist[index];
  audio.src = song.file;
  audio.play();
  songTitle.textContent = song.artist + " - " + song.title;
}

audio.addEventListener("ended", () => {
  // Get a random index different from the current one
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * playlist.length);
  } while (newIndex === currentSongIndex && playlist.length > 1);
  
  currentSongIndex = newIndex;
  playSong(currentSongIndex);
});

playSong(currentSongIndex);
