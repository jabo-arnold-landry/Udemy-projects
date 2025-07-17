const pianoContainer = document.querySelector(".piano");

class NoteKeys {
  constructor(note, noteColor) {
    this.note = note;
    this.noteColor = noteColor;
  }
}

function keyNotes(keyColor) {
  return function (note) {
    return new NoteKeys(note, keyColor);
  };
}
const blackNotes = keyNotes("key black");
const whiteNotes = keyNotes("key white");
const keys = [
  whiteNotes("C"),
  blackNotes("Db"),
  whiteNotes("D"),
  blackNotes("Eb"),
  whiteNotes("E"),
  whiteNotes("F"),
  blackNotes("Gb"),
  whiteNotes("G"),
  blackNotes("Ab"),
  whiteNotes("A"),
  blackNotes("Bb"),
  whiteNotes("B"),
];
let keyFragment = document.createDocumentFragment();
let audioFragment = document.createDocumentFragment();
function nodesCreation(element) {
  return function (attr, nameAttr) {
    element.setAttribute(attr, nameAttr);
  };
}
keys.forEach((element) => {
  const { note, noteColor } = element;
  let noteDiv = document.createElement("div");
  let audioDiv = document.createElement("audio");
  noteDiv.setAttribute("class", `${noteColor}`);
  noteDiv.setAttribute("data-note", `${note}`);
  audioDiv.setAttribute("id", `${note}`);
  audioDiv.setAttribute("src", `/notes/${note}.mp3`);
  keyFragment.append(noteDiv);
  audioFragment.append(audioDiv);
});
pianoContainer.append(keyFragment);
document.body.append(audioFragment);
pianoContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("key")) {
    return playPiano(e.target);
  }
});
function playPiano(key) {
  const audioToPlay = document.getElementById(key.dataset.note);
  audioToPlay.currentTime = 0;
  audioToPlay.play();
  key.classList.add("active");
  audioToPlay.addEventListener("ended", () => key.classList.remove("active"));
}
