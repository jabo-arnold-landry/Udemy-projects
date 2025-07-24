const playList = document.querySelector(".playlist");
const uploadButton = playList.querySelector("button");
const songsList = playList.querySelector(".song-display");
export const songsPlayLists = [];
uploadButton.addEventListener("click", () => {
  const fileInput = playList.querySelector("input");
  //songsPlayLists.push(fileInput.files);
  handlingFiles(fileInput.files);
});

function handlingFiles(files) {
  for (let key of files) {
    songsPlayLists.push(key.name);
  }
  displaySongs(songsPlayLists);
}
const docFrag = document.createDocumentFragment();
function displaySongs(arr) {
  const audioLists = document.querySelector(".audio");
  arr.forEach((audio) => {
    const audioElement = document.createElement("audio");
    audioElement.src = audio;
    docFrag.append(audioElement);
    displaySongsTitle(audio);
  });
  audioLists.append(docFrag);
}
function displaySongsTitle(text) {
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
});
