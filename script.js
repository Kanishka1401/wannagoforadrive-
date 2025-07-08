const audio = document.getElementById("background-music");
const lyrics = document.getElementById("lyrics");
const popup = document.getElementById("drive-popup");
const yesBtn = document.getElementById("yes-btn");
const car = document.querySelector('.ferrari');
const flash = document.getElementById("flash");


// Lyrics to appear at specific times
const lyricText = "lesssgoooo!!!";
const lyricTimings = [
  { time: 40, text: lyricText },
  { time: 47, text: lyricText },
  { time: 51, text: lyricText }
];

// On "Yes" button click
yesBtn.addEventListener("click", () => {
  console.log("YES button clicked ✅"); // debug
  popup.style.display = "none";
  car.classList.add("animate");
  audio.currentTime = 37;
  audio.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });
});



// Show lyrics at the right time
audio.ontimeupdate = () => {
  const currentTime = audio.currentTime;
  let showing = false;

  const explosionEl = document.getElementById("explosion");
const explosionSound = document.getElementById("explosion-sound");

// 💣 Trigger explosion at 60 seconds
// 💣 Trigger explosion at 52 seconds (37s + 15s)
if (currentTime >= 50 && !audio.exploded) {
  audio.exploded = true; // prevent repeating
  console.log("💥 CAR EXPLODED!");

  // Remove the car visually
  document.querySelector(".car-wrapper").style.display = "none";

  // Show explosion GIF
  explosionEl.style.display = "block";

  // Play explosion sound
  explosionSound.play();

  // Optional: screen shake effect
  document.body.classList.add("shake");

  // End shake after 0.5s
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 500);

  // Optional: hide explosion after 2s
  setTimeout(() => {
    explosionEl.style.display = "none";
  }, 2000);

document.getElementById('scene-title').classList.add('fade-out');
document.getElementById('lyrics').style.display = 'none';

// After fade, replace text and fade it in again
setTimeout(() => {
  const title = document.getElementById('scene-title');
  title.innerHTML = `
    ...they didn't survive the ride.<br>
    </span><br>
  <span class="quote">"Every ride has an end."</span>
  `;
  title.classList.remove('fade-out'); // fade back in
}, 1000); // match fade-out time


  setTimeout(() => {
  document.getElementById("wreck-scene").classList.add("show");
}, 1000); // or later, after smoke/fade

}




  lyricTimings.forEach((line) => {
    if (currentTime >= line.time && currentTime < line.time + 3) {
      lyrics.innerText = line.text;
      lyrics.style.opacity = 1;
      showing = true;
    }
  });

  if (!showing) {
    lyrics.style.opacity = 0;
  }

  // Stop at 60s
  if (currentTime >= 80) {
    audio.pause();
    audio.currentTime = 0;
  }
};

// Wait for car animation to finish (6s)
const ripple = document.getElementById("flash-ripple");
const cameraSound = document.getElementById("camera-sound");
const shockwave = document.getElementById("shockwave");


car.addEventListener("animationend", () => {
  console.log("📸 Flash + Shockwave triggered");

  // Show flash
  flash.classList.add("show");

  // Show shockwave
  shockwave.classList.add("show");

  // Play camera shutter
  cameraSound.play();

  // Cleanup after animation
  setTimeout(() => {
    flash.classList.remove("show");
    shockwave.classList.remove("show");
  }, 800);
});

