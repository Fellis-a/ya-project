window.onload = function () {
    const marqueeContent = document.querySelector('.marquee-content');
    const marqueeContainer = document.querySelector('.marquee-container');

    function animateMarquee() {
        let currentPos = marqueeContainer.offsetWidth;
        const step = 2; // Скорость движения (чем больше, тем быстрее)

        function stepAnimation() {
            if (currentPos <= -marqueeContent.offsetWidth) {
                currentPos = marqueeContainer.offsetWidth;
            } else {
                currentPos -= step;
            }
            marqueeContent.style.transform = `translateX(${currentPos}px)`;
            requestAnimationFrame(stepAnimation);
        }

        stepAnimation();
    }

    animateMarquee();
};
