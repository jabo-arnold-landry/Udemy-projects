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
  console.log(currAudioIndex);
}
function pause(index) {
  document.querySelector("#play").innerText = "play";
  audios[index].pause();
}
function highlightPlayingSong(la) {
  for (let tag of songTitle) {
    tag.classList.remove("active-song");
  }
  songTitle[la].classList.toggle("active-song");
}
songContainer.addEventListener("click", (e) => {
  highlightPlayingSong(e.target.dataset.label);
});

export { playerController, playing, pause };
