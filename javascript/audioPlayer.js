import currentPlayingSong from "./utlisFunction.js";

const audios = document.getElementsByTagName("audio");
const songTitle = document.getElementsByTagName("li");
const songContainer = document.querySelector("ul");
const optionsList = document.querySelector(".options-list");
const progressBar = document.getElementById("progress");
let currAudioIndex; // this will track current playing song

/* player controllers section and logic */
function playerController(cntrl) {
  return function (index) {
    audios[index].pause();
    audios[index].currentTime = 0;
    cntrl === "prev" ? playing(index - 1) : playing(index + 1);
  };
}
function playing(index) {
  currAudioIndex = index;
  audios[currAudioIndex].play();
  audios[currAudioIndex].addEventListener("play", (e) => {
    progressBar.max = audios[currAudioIndex].duration;
    setInterval(
      () => (progressBar.value = audios[currAudioIndex].currentTime),
      500
    );
    progressBar.classList.remove("hidden");
  });
  highlightPlayingSong(audios[index].dataset.count);
}
function pause(index) {
  document.querySelector("#play").innerText = "play";
  audios[index].pause();
}
/* highlights and indicators for a current playing song*/
function highlightPlayingSong(la = 0) {
  for (let tag of songTitle) {
    tag.classList.remove("active-song");
  }
  songTitle[la].classList.toggle("active-song");
  const isTue = currAudioIndex === currentPlayingSong();
  if (!isTue) {
    document.getElementById("play").textContent = "play";
    return;
  } else {
    document.getElementById("play").textContent = "pause";
    return;
  }
}
songContainer.addEventListener("click", (e) => {
  highlightPlayingSong(e.target.dataset.label);
  if (e.target.matches("li")) {
    optionsList.classList.remove("hidden");
  }
});

/* arrow up and down functionality */
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  // here we are checking if there is a highlighted song before the play button if not we assign the index to zero else to the index of the active or the highlited song
  let index = currentPlayingSong() < -1 ? 0 : currentPlayingSong();
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

function played(index) {
  if (currAudioIndex === undefined) {
    playing(index);
    return currAudioIndex;
  }
  const isPlaying = currAudioIndex === currentPlayingSong();
  if (isPlaying && !audios[currAudioIndex].paused) {
    pause(currAudioIndex);
    document.getElementById("play").textContent = "play";
    return;
  } else if (isPlaying && audios[currAudioIndex].paused) {
    playing(currAudioIndex);
    document.getElementById("play").textContent = "pause";
    return;
  }
  if (!isPlaying) {
    audios[currAudioIndex].pause();
    audios[currAudioIndex].currentTime = 0;
    playing(currentPlayingSong());
    return;
  }
}

export { playerController, played, pause };
