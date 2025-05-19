const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

function updateModeIcon() {
  toggleBtn.textContent = body.classList.contains('light') ? '🌞' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  updateModeIcon();
});

window.addEventListener('DOMContentLoaded', updateModeIcon);
