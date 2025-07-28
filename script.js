// Mobile navigation toggle
const mobileNavToggle = document.querySelector ('.mobile-nav-toggle');
const navLinks = document.querySelector ('.nav-links');

mobileNavToggle.addEventListener ('click', () => {
  const isExpanded = mobileNavToggle.getAttribute ('aria-expanded') === 'true';
  mobileNavToggle.setAttribute ('aria-expanded', !isExpanded);
  navLinks.classList.toggle ('show');
  mobileNavToggle.innerHTML = isExpanded
    ? '<span class="sr-only">Menu</span><i class="fas fa-bars"></i>'
    : '<span class="sr-only">Close</span><i class="fas fa-times"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener ('click', e => {
  if (!e.target.closest ('.nav-menu') && navLinks.classList.contains ('show')) {
    navLinks.classList.remove ('show');
    mobileNavToggle.setAttribute ('aria-expanded', 'false');
    mobileNavToggle.innerHTML =
      '<span class="sr-only">Menu</span><i class="fas fa-bars"></i>';
  }
});

// Active link highlighting
const sections = document.querySelectorAll ('section');
const navItems = document.querySelectorAll ('.nav-link');

window.addEventListener ('scroll', () => {
  let current = '';
  sections.forEach (section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute ('id');
    }
  });

  navItems.forEach (item => {
    item.classList.remove ('active');
    if (item.getAttribute ('href').slice (1) === current) {
      item.classList.add ('active');
    }
  });
});
