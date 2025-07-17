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
let keyFragment = document.createDocumentFragment()
let audioFragment = document.createDocumentFragment()
function nodesCreation(element){
  return function(attr, nameAttr){
    element.setAttribute(attr, nameAttr)
  }
}
keys.forEach(element => {
  const {note, noteColor} = element
  let noteDiv = document.createElement("div")
  let audioDiv = document.createElement("audio")
   noteDiv.setAttribute("class", `${noteColor}`)
   noteDiv.setAttribute("data-note", `${note}`)
   audioDiv.setAttribute("id",`${note}`)
keyFragment.append(noteDiv)
audioFragment.append(audioDiv)
});
pianoContainer.append(keyFragment, audioFragment)