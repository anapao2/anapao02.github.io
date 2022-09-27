const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.keywhite');
const blackKeys = document.querySelectorAll('.key.black');

console.log(keys.length);

function PlayNote(note) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}


let myName = "Ana Pao";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;

let myAge = 17;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;


let likesMusic = true;

if(likesMusic === true) {
    likesMusicText = 'amo la musica';
} else {
  likesMusicText = 'no me gusta la musica';
}

const likesMusicSpan = document.querySelector('#likesMusic');
likesMusicSpan.textContent = likesMusicText;

function pressedKey() {
  alert('A key was pressed');
}

document.addEventListener('keydown', (e) => {
  //aler('Key pressed');
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeysIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1){
    playNote (whiteKeys[whiteKeyIndex]);
}
  if (blackKeyIndex > -1) {
    playNote (blackKeys [blackKeyIndex]);
    }
});
