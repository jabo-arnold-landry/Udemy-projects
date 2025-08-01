import currentPlayingSong from "./utlisFunction.js";

const audios = document.getElementsByTagName("audio");
const songTitle = document.getElementsByTagName("li");
const songContainer = document.querySelector("ul");
let currAudioIndex = null;
function playerController(cntrl) {
  return function (index) {
    audios[index].pause();
    audios[index].currentTime = 0;
    cntrl === "prev" ? playing(index - 1) : playing(index + 1);
  };
}
function playing(index = 0) {
  currAudioIndex = index;
  audios[currAudioIndex].play();
  document.querySelector("#play").innerText = "pause";
  highlightPlayingSong(audios[index].dataset.count);
}
function pause(index) {
  document.querySelector("#play").innerText = "play";
  audios[index].pause();
}
function highlightPlayingSong(la = 0) {
  for (let tag of songTitle) {
    tag.classList.remove("active-song");
  }
  songTitle[la].classList.toggle("active-song");
}
songContainer.addEventListener("click", (e) => {
  highlightPlayingSong(e.target.dataset.label);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  let index = currentPlayingSong();
  if (e.key === "ArrowUp") {
    const newIndex = index ? index - 1 : 0;
    highlightPlayingSong(newIndex);
  }
  if (e.key === "ArrowDown") {
    if (index === 0) highlightPlayingSong(index);
    const newIndex = index < songTitle.length - 1 ? index + 1 : 0;
    highlightPlayingSong(newIndex);
  }
});
export { playerController, playing, pause, songTitle };
