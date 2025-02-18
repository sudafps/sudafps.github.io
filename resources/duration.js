window.onload = function() {
  const audio = document.getElementById('audio');
  const timeDisplay = document.getElementById('audio-time');

  audio.addEventListener('timeupdate', function() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    const progressPosition = Math.floor((28 * audio.currentTime) / audio.duration);
    
    timeDisplay.innerHTML = createProgressBar(progressPosition) + " " + formatTime(minutes, seconds);
  });

  function createProgressBar(position) {
    let progressBar = "";
    for (let i = 0; i < 28; i++) {
      progressBar += i === position ? "*" : "-";
    }
    return progressBar;
  }

  function formatTime(minutes, seconds) {
    return (
      (minutes < 10 ? "0" : "") + 
      minutes + 
      ":" + 
      (seconds < 10 ? "0" : "") + 
      seconds
    );
  }
};
