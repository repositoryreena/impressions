// script.js
function playAudio(id) {
  const audio = document.getElementById(id);
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
