const textElement = document.querySelector(".texts");
let recognition = new webkitSpeechRecognition();
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.id === "start-speech") {
    startSpeech();
  }
  if (e.target.id === "end-speech") {
    endSpeech();
  }
});
function startSpeech() {
  //alert("helo");
  if ("webkitSpeechRecognition" in window) {
    setRecognition();
    recognition.start();
  } else {
    return alert("no recognition found");
  }
}
function endSpeech() {
  if (recognition) recognition.stop();
  alert("recognition stoped");
}
function setRecognition() {
  recognition.continous = true; //keeps listen for the speech continiously
  recognition.interimResults = true; // keeps the listen to the speech
  recognition.lang = "en-US"; // listening language
  recognition.onresult = function (event) {
    // processing results
    const { finalTranscript, interTranScript } = result(event.results);
    textElement.innerHTML = finalTranscript + interTranScript;
  };
}

function result(results) {
  let finalTranscript = "";
  let interTranScript = "";
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    let transcript = results[i][0].transcript;
    transcript.replace("\n", "<br>");
    if (results[i].isFinal) {
      finalTranscript += transcript;
    } else {
      transcript += interTranScript;
    }
    console.log(
      `transcript:${transcript}, finaltranscript:${finalTranscript}, interTranScript:${interTranScript}`
    );
  }
  return { finalTranscript, interTranScript };
}
