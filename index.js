const btn = document.querySelector('.person-btn');
const share = document.querySelector('.share');
 
btn.addEventListener('click', () => {
  share.classList.toggle('icon');
});
 
window.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && share.classList.contains('icon')) {
    share.classList.toggle('icon');
  }
});
 
window.addEventListener('beforeunload', () => {
  share.classList.remove('icon');
});
