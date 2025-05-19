// Toggle dark/light mode with icon switch & localStorage persist

const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

function updateIcon() {
  if (body.classList.contains('light')) {
    toggleBtn.textContent = '☀️'; // sun for light
  } else {
    toggleBtn.textContent = '🌙'; // moon for dark
  }
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  updateIcon();
});

// On page load, apply saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
  } else {
    body.classList.remove('light');
  }
  updateIcon();
});
