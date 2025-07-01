
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Function to load header component
function loadHeader() {
  fetch('info.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const header = doc.querySelector('#header-component').innerHTML;
      document.querySelector('#header-placeholder').innerHTML = header;
    })
    .catch(error => console.error('Error loading header:', error));
}

// Function to load footer component
function loadFooter() {
  fetch('info.html')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const footer = doc.querySelector('#footer-component').innerHTML;
      document.querySelector('#footer-placeholder').innerHTML = footer;
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Load components when page loads
document.addEventListener('DOMContentLoaded', function() {
  loadHeader();
  loadFooter();
});


/*ANIMATIONS*/

  // Selecciona todos los elementos que deben animarse al hacer scroll
  const fadeElements = document.querySelectorAll('.fade-trigger');

  function showOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.85;

      if (isVisible) {
        el.classList.remove('hidden-fade');
        el.classList.add('fadeIn');
      }
    });
  }

  // Ejecutar la función al cargar y al hacer scroll
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);