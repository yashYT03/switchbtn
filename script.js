const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('night-mode');
  toggleBtn.classList.toggle('night-mode');
});