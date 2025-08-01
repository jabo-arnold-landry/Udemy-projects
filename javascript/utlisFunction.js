export default function currentPlayingSong() {
  const songTitle = document.getElementsByTagName("li");
  let element = document.querySelector(".active-song");
  let index = [...songTitle].indexOf(element);
  return index;
}
