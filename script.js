const bgm = document.getElementById('bgm');
const bell = document.getElementById('bell');
const musicBtn = document.getElementById('musicBtn');

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;
  bgm.volume = 0.6;
  bgm.play().catch(()=>{});
  audioUnlocked = true;
  musicBtn.innerText = '🔊 Music On';
}

document.body.addEventListener('click', unlockAudio, { once: true });

function playBell() {
  if (!audioUnlocked) return;
  bell.currentTime = 0;
  bell.play().catch(()=>{});
}

function goToPage(n) {
  playBell();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + n).classList.add('active');
}

function petals() {
  playBell();
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-10px';
    p.style.position = 'fixed';
    p.style.width = '16px';
    p.style.height = '16px';
    p.style.background = 'pink';
    p.style.borderRadius = '50%';
    p.style.animation = 'fall 4s linear';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4000);
  }
}
