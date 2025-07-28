const audios = document.getElementsByTagName("audio");
function prev() {}
function playing() {
  audios[0].play();
}
function next() {
  console.log("next");
}

export { prev, playing, next };
