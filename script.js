const pages = document.querySelectorAll(".page");
const backArrow = document.getElementById("backArrow");
const bgm = document.getElementById("bgm");

let current = 1;
let arrowTimer;
let musicStarted = false;

/* 🎵 START MUSIC — ONLY ON USER CLICK */
function startMusic() {
  if (musicStarted) return;

  bgm.volume = 0.6;
  bgm.play()
    .then(() => {
      musicStarted = true;
      console.log("Music started");
    })
    .catch(err => console.log("Play failed:", err));
}

/* PAGE NAV */
function goTo(n) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
  current = n;
  showArrow();
}

function goBack() {
  if (current > 1) goTo(current - 1);
}

/* BACK ARROW */
backArrow.onclick = goBack;

function showArrow() {
  if (current > 1) {
    backArrow.style.display = "block";
    resetArrowTimer();
  } else {
    backArrow.style.display = "none";
  }
}

function resetArrowTimer() {
  clearTimeout(arrowTimer);
  arrowTimer = setTimeout(() => {
    backArrow.style.opacity = "0";
  }, 3000);
  backArrow.style.opacity = "1";
}

/* 🎉 CELEBRATE */
function throwPetals() {
  const bell = document.getElementById("bell");
  bell.currentTime = 0;
  bell.play();

  for (let i = 0; i < 35; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 8000);
  }
}
