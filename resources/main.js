(function() {
  function setTitle(prefix, text) {
    let position = 0;
    let forward = true;
    
    const aniTitle = setInterval(() => {
      if (position === text.length) forward = false;
      if (position === 0) forward = true;
      
      position = forward ? ++position : --position;
      document.title = prefix + (position ? text.slice(0, position) : '');
    }, 400);

    return aniTitle;
  }

  function mediaPlay() {
    const audio = document.getElementById('audio');
    const video = document.getElementById('video');
    audio.volume = 0.3;
    Promise.all([
      audio.play(),
      video.play()
    ]).catch(console.error);
  }

  function setTyped(loop, strings = []) {
    return new Typed('#typed', {
      strings,
      typeSpeed: 40, 
      delaySpeed: 90,
      showCursor: false,
      loop
    });
  }

  const setClipboard = text => navigator.clipboard.writeText(text);

  Object.assign(window, {
    setTitle,
    mediaPlay, 
    setTyped,
    setClipboard
  });

  console.log('https://www.youtube.com/@xdsuda by sudafps on discord');
})();
