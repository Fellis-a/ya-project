
document.addEventListener("DOMContentLoaded", function () {
    function rearrangeContent() {
        const img = document.querySelector('.event-img');
        const placeholder = document.querySelector('.event-img-placeholder');
        const windowWidth = window.innerWidth;

        if (windowWidth < 767) {
            if (!placeholder.contains(img)) {
                placeholder.appendChild(img);
            }
        } else {
            if (img.parentNode !== document.querySelector('.event-lection')) {
                document.querySelector('.event-lection').appendChild(img);
            }
        }
    }

    // Run on initial load
    rearrangeContent();

    // Run on resize
    window.addEventListener('resize', rearrangeContent);
});

