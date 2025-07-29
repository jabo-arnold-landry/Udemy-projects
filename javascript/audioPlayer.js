const audios = document.getElementsByTagName("audio");
const songsList = document.getElementsByTagName("li");

function playerController(cntrl) {
  return function (index) {
    audios[index].pause();
    audios[index].currentTime = 0;
    cntrl === "prev" ? playing(index - 1) : playing(index + 1);
  };
}
function playing(index = 0) {
  audios[index].play();
  highlightPlayingSong(audios[index].dataset.count);
}

function pause(index) {
  audios[index].pause();
}
function highlightPlayingSong(la) {
  for (let tag of songsList) {
    tag.classList.remove("active-song");
  }
  songsList[la].classList.toggle("active-song");
}
export { playerController, playing, pause };
