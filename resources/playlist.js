const playlist = [
  {
    title: "FML",
    file: "resources/songs/FML.mp3",
    artist: "Arizona Zervas",
  },
];

const audio = document.getElementById("audio");
const songTitle = document.getElementById("audio-info");
const startTime = 5;
let currentSongIndex = Math.floor(Math.random() * playlist.length);

function playSong(index) {
  const song = playlist[index];
  audio.src = song.file;
  audio.addEventListener("loadedmetadata", () => {
    audio.currentTime = Math.min(startTime, audio.duration || startTime);
    audio.play();
  }, { once: true });
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
