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
  audios[index].play();
  currAudioIndex = index;
  document.querySelector("#play").innerText = "pause";
  highlightPlayingSong(audios[index].dataset.count);
}

function pause(index) {
  audios[index].pause();
  document.querySelector("#play").innerText = "play";
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
// songContainer.addEventListener("dblclick", (e) => {
//   if (e.target.matches("li")) {
//     if (currAudioIndex !== null && currAudioIndex !== e.target.dataset.label) {
//       audios[currAudioIndex].pause();
//       audios[currAudioIndex].currentTime = 0;
//     }
//     playing(e.target.dataset.label);
//     currAudioIndex = e.target.label;
//   }
// });
export { playerController, playing, pause };
