
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

const header = document.querySelector('.tutajtest');
const nav = document.querySelector('.nav-links');

function updateMenuPosition() {
  const headerHeight = header.offsetHeight;
  nav.style.top = `${headerHeight}px`;
}

updateMenuPosition();
window.addEventListener('resize', updateMenuPosition);

// Jeśli header się dynamicznie zmienia np. animuje:
const observer = new ResizeObserver(updateMenuPosition);
observer.observe(header);