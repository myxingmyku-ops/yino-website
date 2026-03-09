// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
const ring = document.createElement('div');
ring.className = 'cursor-ring';
document.body.appendChild(cursor);
document.body.appendChild(ring);

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .svc-item, .work-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.style.transform = 'translate(-50%,-50%) scale(2)');
  el.addEventListener('mouseleave', () => ring.style.transform = 'translate(-50%,-50%) scale(1)');
});

// Scroll reveal
const items = document.querySelectorAll('.about-body, .about-data, .svc-item, .work-card, .contact-body');
items.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Nav background
window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.backdropFilter = window.scrollY > 80 ? 'blur(20px)' : 'none';
  document.querySelector('.nav').style.background = window.scrollY > 80 ? 'rgba(8,8,8,0.9)' : 'transparent';
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '已收到，我们将尽快联系您';
  btn.style.borderColor = '#666';
  btn.style.color = '#666';
  btn.disabled = true;
}
