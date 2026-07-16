document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to body for fade-in animations
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Sidebar toggling for mobile
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const toggleMenu = () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }

  // Set active nav link based on current path
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'dashboard.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  setTimeout(() => {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      if (targetWidth) {
        bar.style.width = targetWidth;
      }
    });
  }, 300);

  // Card hover glow effect tracking mouse position
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Course search filter
  const searchInput = document.getElementById('courseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const courseCards = document.querySelectorAll('.course-card');
      
      courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const code = card.querySelector('.badge').textContent.toLowerCase();
        
        if (title.includes(term) || code.includes(term)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
