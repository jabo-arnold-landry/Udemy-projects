const pianoContainer = document.querySelector(".piano")

class NoteKeys {
  constructor(note, noteColor){
    this.note = note;
    this.noteColor = noteColor
  }
}

function keyNotes(keyColor){
  return function(note){
    return new NoteKeys(note, keyColor)
  }
}
const blackNotes = keyNotes("key black")
const whiteNotes = keyNotes("key white")
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
  whiteNotes("B")
]
let docFragment = document.createDocumentFragment()
let noteDiv = document.createElement()
keys.forEach(element => {
  const {note, noteColor} = element
   noteDiv.innerHTML +=`
                      <div data-note=${note} class=${noteColor}></div> <br>
                      <audio id=${note}></audio>`

docFragment.append(noteDiv)
});
pianoContainer.append(docFragment)