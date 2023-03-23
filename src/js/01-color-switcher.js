const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  // startMusic: document.querySelector('button')[0],
  // stopMusic: document.querySelector('button')[1],
  sound: document.getElementById('myAudio'),
};

// const audio = new Audio(
//   'https://drive.google.com/uc?id=10yOYDe84HgLsUV-7-WdjVS0Qd8eRuI5g'
// );

let timer = null;
refs.stopBtn.disabled = true;
refs.startBtn.style.marginTop = '10%';
refs.startBtn.style.marginLeft = '50%';
refs.startBtn.style.fontSize = '200%';

refs.stopBtn.style.fontSize = '200%';
refs.stopBtn.style.marginLeft = '1%';

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  // refs.sound.play();
  timer = setInterval(() => {
    // audio.play();
    refs.body.style.backgroundColor = getRandomHexColor();
    // refs.body.style.backgroundImage =
    //   'url(https://media3.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=6c09b9520e01e25be92d5c5074f397f36bb3cc5f6d554085&rid=giphy.gif&ct=g)';
    // refs.body.style.backgroundSize = 'cover';
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  audio.pause();
  // refs.sound.pause();
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  // refs.body.style.backgroundImage = 'none';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
