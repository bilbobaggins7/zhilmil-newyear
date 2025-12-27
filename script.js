const bgm = document.getElementById('bgm');
const bell = document.getElementById('bell');
const musicBtn = document.getElementById('musicBtn');

let musicOn = false;

/* 🎵 MUSIC TOGGLE (must be user click) */
musicBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  if (!musicOn) {
    bgm.volume = 0.6;
    bgm.play().catch(() => {});
    musicBtn.innerText = '🔊 Music On';
    musicOn = true;
  } else {
    bgm.pause();
    musicBtn.innerText = '🔇 Music Off';
    musicOn = false;
  }
});

/* 🔔 FAIRY BELL */
function playBell() {
  if (!musicOn) return;
  bell.currentTime = 0;
  bell.volume = 0.8;
  bell.play().catch(() => {});
}

/* 📖 PAGE SWITCH */
function goToPage(n) {
  playBell();
  document.querySelectorAll('section').forEach(sec =>
    sec.classList.remove('active')
  );
  document.getElementById('page' + n).classList.add('active');
}

/* 🌹 ROSE PETALS (FIXED FALLING) */
function petals() {
  playBell();

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'petal';

    p.style.left = Math.random() * 100 + 'vw';

    const duration = 3 + Math.random() * 3;
