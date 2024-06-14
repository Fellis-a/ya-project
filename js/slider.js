document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides > div");
    const totalSlides = slides.length;
    let slidesToShow = window.innerWidth < 767 ? 1 : 3;
    let currentIndex = 0;
    let slideInterval;

    const previousButton = document.querySelector(".previous-button");
    const nextButton = document.querySelector(".next-button");
    const sliderNumber = document.querySelector(".slider-number");

    function updateSliderNumber() {
        const currentSlide = currentIndex % totalSlides + 1;
        sliderNumber.innerHTML = `${currentSlide}<span>/&nbsp;${totalSlides}</span>`;
    }

    function showSlides(index) {
        const offset = index * -100 / slidesToShow;
        document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
        updateSliderNumber();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlides(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlides(currentIndex);
    }

    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    function updateSlidesToShow() {
        slidesToShow = window.innerWidth < 767 ? 1 : 3;
        showSlides(currentIndex);
    }

    window.addEventListener('resize', updateSlidesToShow);

    previousButton.addEventListener("click", function () {
        previousSlide();
        resetSlideInterval();
    });

    nextButton.addEventListener("click", function () {
        nextSlide();
        resetSlideInterval();
    });

    showSlides(currentIndex);
    startSlideInterval();
});


// document.addEventListener('scroll', () => {
//     const block = document.querySelector('.block7');
//     const plane = document.querySelector('.plane');
//     const rect = block.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     // Установим границы в 100 пикселей сверху и снизу области просмотра
//     const offset = 10;

//     // Проверяем, находится ли блок в области просмотра с учётом границ
//     if (rect.top <= windowHeight - offset && rect.bottom >= offset) {

//         plane.classList.remove('move-down');
//     } else {
//         plane.classList.add('move-down');
//     }

//     if (windowWidth < 767) {

//     } else { }
// });

