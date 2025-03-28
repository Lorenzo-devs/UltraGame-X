document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Parallax effect for header and game cards
    const header = document.querySelector('header');
    const gameCards = document.querySelectorAll('.game-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for header
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
        
        // Fade in effect for game cards
        gameCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight && cardBottom > 0) {
                const scrollPercent = (windowHeight - cardTop) / windowHeight;
                card.style.opacity = Math.min(scrollPercent, 1);
                card.style.transform = `translateY(${Math.max(0, 1 - scrollPercent) * 50}px)`;
            }
        });
    });

    // Hover effect for game cards
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.game-info').style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.game-info').style.transform = 'translateY(0)';
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});
