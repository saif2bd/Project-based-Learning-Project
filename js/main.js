/* js/main.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scrolled State
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            navbar.style.padding = "0.8rem 5%";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.padding = "1rem 5%";
        }
    });

    // 2. Simple Counter Animation for Index Page Stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Trigger animation only if elements exist (index page)
    if(counters.length > 0) {
        animateCounters();
    }
});