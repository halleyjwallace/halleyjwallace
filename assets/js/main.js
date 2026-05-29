const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// News "see more" toggle
const newsMoreBtn = document.getElementById('newsMoreBtn');
const newsExtra   = document.getElementById('newsExtra');
if (newsMoreBtn && newsExtra) {
    newsMoreBtn.addEventListener('click', () => {
        const isOpen = !newsExtra.hidden;
        if (isOpen) {
            // Collapse
            newsExtra.hidden = true;
            newsMoreBtn.classList.remove('open');
            newsMoreBtn.innerHTML = 'See all news &nbsp;<i class="fas fa-chevron-down"></i>';
        } else {
            // Expand then scroll
            newsExtra.hidden = false;
            newsMoreBtn.classList.add('open');
            newsMoreBtn.innerHTML = 'Show less &nbsp;<i class="fas fa-chevron-down"></i>';
            setTimeout(() => {
                newsExtra.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    });
}

// Navbar shadow on scroll + active link highlighting
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);

    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

// Mobile nav toggle
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
    }
});
