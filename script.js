// script.js
// Play a tone when the button is clicked

let audioContext; // Store context globally

document.addEventListener("DOMContentLoaded", function() {
  const playBtn = document.getElementById("play-tone-btn");
  
  if (playBtn) {
    playBtn.addEventListener("click", async function() {
      try {
        // Create/Resume AudioContext on first click
        if (!audioContext) {
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          await audioContext.resume(); // Required for Chrome
        }
        
        // Create oscillator
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        
        // Connect and play
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5); // Stop after 0.5s
        
        console.log("Playing A4 (440Hz) tone"); // Verify in browser console
        
      } catch (error) {
        console.error("Audio error:", error);
        alert("Please click 'Allow' if prompted for audio permissions");
      }
    });
  }
});
