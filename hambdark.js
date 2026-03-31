
    // Hamburger menü
    const hamburger = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
    hamburger?.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    // Sötét mód
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle?.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }