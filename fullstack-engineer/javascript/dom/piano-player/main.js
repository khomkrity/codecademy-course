// The keys and notes variables store the piano keys
const keys = [
  'c-key',
  'd-key',
  'e-key',
  'f-key',
  'g-key',
  'a-key',
  'b-key',
  'high-c-key',
  'c-sharp-key',
  'd-sharp-key',
  'f-sharp-key',
  'g-sharp-key',
  'a-sharp-key',
];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
const keyPlay = function (event) {
  event.target.style.backgroundColor = '#DDDDDD';
};

// Write a named function with event handler properties
const keyReturn = function (event) {
  event.target.style.backgroundColor = '';
};

// Write a loop that runs the array elements through the function
const keyPress = function (note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
};

notes.forEach(function (note) {
  keyPress(note);
});

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// keyboard notes
let letterNoteOne = document.getElementById('letter-note-one');
let letterNoteTwo = document.getElementById('letter-note-two');
let letterNoteThree = document.getElementById('letter-note-three');
let letterNoteFour = document.getElementById('letter-note-four');
let letterNoteFive = document.getElementById('letter-note-five');
let letterNoteSix = document.getElementById('letter-note-six');

// lyric on each key
let wordOne = document.getElementById('word-one');
let wordTwo = document.getElementById('word-two');
let wordThree = document.getElementById('word-three');
let wordFour = document.getElementById('word-four');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  letterNoteFive.innerHTML = 'D';
  letterNoteSix.innerHTML = 'C';
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  letterNoteThree.innerHTML = 'G';

  letterNoteFour.innerHTML = 'E';

  wordFive.innerHTML = 'DEAR';
  letterNoteFive.innerHTML = 'C';

  wordSix.innerHTML = 'FRI-';
  letterNoteSix.innerHTML = 'B';

  lastLyric.style.display = 'inline-block';
};

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  startOver.hidden = false;
  nextThree.hidden = true;

  wordOne.innerHTML = 'HAP-';
  letterNoteOne.innerHTML = 'F';

  wordTwo.innerHTML = 'PY';
  letterNoteTwo.innerHTML = 'F';

  wordThree.innerHTML = 'BIRTH';
  letterNoteThree.innerHTML = 'E';

  wordFour.innerHTML = 'DAY';
  letterNoteFour.innerHTML = 'C';

  wordFive.innerHTML = 'TO';
  letterNoteFive.innerHTML = 'D';

  wordSix.innerHTML = 'YOU!';
  letterNoteSix.innerHTML = 'D';

  lastLyric.style.display = 'none';
};

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;

  wordOne.innerHTML = 'HAP-';
  letterNoteOne.innerHTML = 'G';

  wordTwo.innerHTML = 'PY';
  letterNoteTwo.innerHTML = 'G';

  wordThree.innerHTML = 'BIRTH-';
  letterNoteThree.innerHTML = 'A';

  wordFour.innerHTML = 'DAY';
  letterNoteFour.innerHTML = 'G';

  wordFive.innerHTML = 'TO';
  letterNoteFive.innerHTML = 'C';

  wordSix.innerHTML = 'YOU';
  letterNoteSix.innerHTML = 'B';
};
