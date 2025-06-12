// script.js
// Play a tone when the button is clicked

document.addEventListener("DOMContentLoaded", function() {
  const playBtn = document.getElementById("play-tone-btn");
  if (playBtn) {
    playBtn.addEventListener("click", function() {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = 440; // A4 note (standard tuning)
      oscillator.connect(ctx.destination);
      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
        ctx.close();
      }, 500); // Play for 0.5 seconds
    });
  }
});
