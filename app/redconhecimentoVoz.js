
const elementChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak )

function onSpeak (e) {
    Chute = e.results [0] [0].transcript
    exibeChuteNaTela(Chute)
    verificaSeOChutePossuiUmValorValido(Chute)
}

function exibeChuteNaTela(Chute) {
    elementChute.innerHTML = `
    <div>Você disse</div>
    <span class="box"> ${Chute}</span> 
    `

}


recognition.addEventListener('end', () => recognition.start ())

