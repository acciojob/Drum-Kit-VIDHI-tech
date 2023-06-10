//your JS code here. If required.
// Function to play the sound
function playSound(e) {
  // Find the audio element associated with the pressed key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // Find the key element associated with the pressed key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0; 
  audio.play(); 

  // Add a class to the key element for visual effect
  key.classList.add('playing');
}

// Function to remove the visual effect class
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


window.addEventListener('keydown', playSound);

// Get all the keys and attach transitionend event listener to each
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
