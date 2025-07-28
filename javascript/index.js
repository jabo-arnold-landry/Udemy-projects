const playList = document.querySelector(".playlist");
const songsList = playList.querySelector(".song-display");
const controllers = document.querySelector(".controller");
export let songsPlayLists = [];
const fileInput = playList.querySelector("input");
import { prev, playing, next } from "./audioPlayer.js";
fileInput.addEventListener("input", () => {
  handlingFiles(fileInput.files);
});
function handlingFiles(files) {
  for (let file of files) {
    songsPlayLists.push(file);
  }
  displaySongs(songsPlayLists);
  songsPlayLists = [];
}
function displaySongs(arr) {
  const audioFrag = document.createDocumentFragment();
  const audioLists = document.querySelector(".audio");
  arr.forEach((audio) => {
    const audioElement = document.createElement("audio");
    const url = URL.createObjectURL(audio);
    audioElement.src = url;
    audioElement.id = audio.name;
    audioFrag.append(audioElement);
    displaySongsTitle(audio.name);
  });
  audioLists.append(audioFrag);
}
function displaySongsTitle(text) {
  const docFrag = document.createDocumentFragment();
  const li = document.createElement("li");
  li.textContent = text;
  docFrag.append(li);
  songsList.append(docFrag);
  const p = playList.querySelector("p");
  p.textContent = "";
}
export const dropArea = document.querySelector(".drag-zone");
const activeState = toggleActiveOrInactive(true);
const inactiveState = toggleActiveOrInactive(false);
const dropEvents = ["dragenter", "dragover", "dragleave", "drop"];
dropEvents.forEach((evt) => {
  dropArea.addEventListener(evt, (e) => e.preventDefault());
});

dropEvents.slice(0, 2).forEach((evt) => {
  dropArea.addEventListener(evt, activeState);
});

dropEvents
  .slice(2, 4)
  .forEach((evt) => dropArea.addEventListener(evt, inactiveState));
function toggleActiveOrInactive() {
  return function (state) {
    state
      ? dropArea.classList.add("drag-active")
      : dropArea.classList.remove("drag-active");
  };
}

dropArea.addEventListener("drop", (e) => {
  const dataTransfer = e.dataTransfer;
  const files = dataTransfer.files;
  handlingFiles(files);
  inactiveState();
});
controllers.addEventListener("click", (e) => {
  if (e.target.id === "prev") {
    prev();
  }
  if (e.target.id === "play") {
    playing();
  }
  if (e.target.id === "nxt") {
    next();
  }
});
