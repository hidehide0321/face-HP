document.addEventListener('DOMContentLoaded', function() {

    // --- Staggered Fade-in on Scroll ---
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, {
            threshold: 0.15 // Trigger when 15% of the element is visible
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- Scroll to Top Button ---
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.id = 'scroll-to-top';
    scrollToTopButton.innerHTML = '&uarr;'; // Use innerHTML for arrow entity
    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) { // Show after scrolling a bit more
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});