import { songTitle } from "./audioPlayer.js";
export default function currentPlayingSong() {
  let element = document.querySelector(".active-song");
  let index = [...songTitle].indexOf(element);
  if (element == null) index = 0;
  return index;
}
