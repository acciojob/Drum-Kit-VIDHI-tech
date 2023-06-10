// Function to play the sound
function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return; // Return if no audio element found

  audio.currentTime = 0; // Rewind to the start
  audio.play(); // Play the audio

  key.classList.add('playing'); // Add a class to the key element for visual effect
}

// Function to remove the visual effect class
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Add event listener for keydown event
window.addEventListener('keydown', playSound);

// Get all the keys and attach transitionend event listener to each
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
