const Q = document.querySelector('.questionDiv p');
const A = document.querySelector('.answerDiv p');
const talkButton = document.querySelector('.buttonDiv button');
const previousActivity = document.querySelector('.previousActivity');
const history = document.querySelector('.history');
const speechObject = window.webkitSpeechRecognition;
const speech = new speechObject();
let recognitionInProgress = false;

window.onload = () => {
    Q.style.display='none';
    A.style.display='none';
    history.style.display='none';
}

const replies = [
    "Random answer 1",
    "Random answer 2",
    "Random answer 3",
    "Random answer 4",
    "Random answer 5",
    "Random answer 6",
    "Random answer 7",
    "Random answer 8",
    "Random answer 9",
    "Random answer 10",
    "Random answer 11",
    "Random answer 12",
    "Random answer 13",
    "Random answer 14",
    "Random answer 15",
];

talkButton.addEventListener('click',()=>{
    if(!recognitionInProgress){
        speech.start();
        recognitionInProgress = true;
    }
});

speech.addEventListener('result',(e)=>{
    history.style.display='block';
    recognitionInProgress=false;
    Q.textContent = e.results[0][0].transcript;
    addInHistory(Q.textContent);
    Q.style.display = "block";
    reply();
})

function addInHistory(Text){
    const p = document.createElement('p');
    p.textContent = Text;
    previousActivity.appendChild(p);
}

function reply(){
    const randomReply = new SpeechSynthesisUtterance();
    randomReply.text = replies[Math.floor(Math.random()*replies.length)];
    A.textContent = (randomReply.text);
    A.style.display = "block";
    window.speechSynthesis.speak(randomReply);
}
