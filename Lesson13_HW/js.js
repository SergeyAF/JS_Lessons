const message = document.querySelector('.voice_to_text');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

const grammar = '#JSGF V1.0;';

let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
// recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.onresult = function (event) {
    const last = event.results.length - 1;
    const speech = event.results[last][0].transcript;

    message.textContent = 'Распознанная фраза: ' + speech + '.';
};

recognition.onspeechend = function() {
    recognition.stop();
};
recognition.onerror = function(event) {
    message.textContent = 'Ошибка распознования: ' + event.error;
};

document.querySelector('.record_btn').addEventListener('click', () => recognition.start());
