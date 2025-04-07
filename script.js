let current = 0;
const screens = document.querySelectorAll('.screen');

function nextScreen() {
  if (current < screens.length - 1) {
    screens[current].classList.add('hidden');
    current += 1;
    screens[current].classList.remove('hidden');
  }
}

// Show the first screen initially
screens[0].classList.remove('hidden');
