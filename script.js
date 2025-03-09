
let speech = new SpeechSynthesisUtterance();
let btn=document.querySelector("button");
let voices = [];
let voiceSelect = document.querySelector("select");
// let textarea = document.querySelector("textarea");
// btn.innerHTML = "<img src='play-large-fill.png'> Listen";;

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    voices.forEach((voice,i)=> (voiceSelect.options[i]) = new Option(voice.name,i))
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

// textarea.addEventListener("input", () =>{
//     speech.text = textarea.value;
// })

btn.addEventListener("click",() => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})

