const playlist = [
  {
    title: "48",
    file: "resources/song.mp3", 
    artist: "RELLY GUNZ X SG",
  },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("audio-info");
let currentSongIndex = 0;

function playSong(index) {
  const song = playlist[index];
  audio.src = song.file;
  audio.play();
  songTitle.textContent = song.artist + " - " + song.title;
}

audio.addEventListener("ended", () => {
  currentSongIndex++;
  if (currentSongIndex >= playlist.length) {
    currentSongIndex = 0;
  }
  playSong(currentSongIndex);
});

playSong(currentSongIndex);
