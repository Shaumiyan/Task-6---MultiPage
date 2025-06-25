// Highlight active nav link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  if (link.href.includes(location.pathname)) {
    link.classList.add('active');
  }
});
