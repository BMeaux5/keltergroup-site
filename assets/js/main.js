// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Seamless word marquee
const track = document.getElementById('wordTrack');
if (track) {
  // Clone the track content enough times to fill screen
  const clone1 = track.cloneNode(true);
  const clone2 = track.cloneNode(true);
  const clone3 = track.cloneNode(true);
  const marquee = document.getElementById('wordMarquee');
  marquee.appendChild(clone1);
  marquee.appendChild(clone2);
  marquee.appendChild(clone3);

  let position = 0;
  const speed = 0.5;

  function animate() {
    position -= speed;
    const trackWidth = track.offsetWidth;
    if (Math.abs(position) >= trackWidth) {
      position = 0;
    }
    marquee.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}
