const playList = document.querySelector(".playlist");
const uploadButton = playList.querySelector("button");
const songsList = playList.querySelector(".song-display");
const songsPlayLists = [];
uploadButton.addEventListener("click", () => {
  const fileInput = playList.querySelector("input");
  //songsPlayLists.push(fileInput.files);
  for (let key of fileInput.files) {
    songsPlayLists.push(key.name);
  }
  console.log(songsPlayLists);
  displaySongs(songsPlayLists);
});
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
