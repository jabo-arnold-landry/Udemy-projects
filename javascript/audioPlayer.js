const audios = document.getElementsByTagName("audio");

function prev(index) {
  audios[index].pause();
  audios[index].currentTime = 0;
  audios[index - 1].play();
}
function playing(index = 0) {
  audios[index].play();
}

function pause(index) {
  return audios[index].pause();
}
function next(index) {
  audios[index].pause();
  audios[index].currentTime = 0;
  audios[index + 1].play();
}

export { prev, playing, pause, next };
