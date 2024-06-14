document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const dotsContainer = document.querySelector(".carousel-dots");
    let blocks = Array.from(document.querySelectorAll(".block"));
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            index = 0;
        } else if (index >= blocks.length) {
            index = blocks.length - 1;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
        updateButtons();
        updateDots();
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        blocks.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => showSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        });
    }

    function updateButtons() {
        prevButton.classList.toggle("disabled", currentSlide === 0);
        nextButton.classList.toggle("disabled", currentSlide === blocks.length - 1);
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === blocks.length - 1;
    }

    function combineBlocks() {
        if (window.innerWidth <= 767) {
            // Combine block1 and block2 if not already combined
            if (!document.querySelector(".block1").innerHTML.includes("Открытие фешенебельной")) {
                document.querySelector(".block1 ").innerHTML = '<div class="combined-item"><div class="bullet">1</div><div class="text">  Строительство железнодорожной магистрали Москва-Васюки</div></div>';
                document.querySelector(".block1").classList.add("combined");
                document.querySelector(".block1 ").innerHTML += '<div class="combined-item"><div class="bullet">2</div><div class="text">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</div></div>';
                document.querySelector(".block2").style.display = 'none';
            }

            // Combine block4 and block5 if not already combined
            if (!document.querySelector(".block4 ").innerHTML.includes("Размещение гаражей")) {
                document.querySelector(".block4").innerHTML = '<div class="combined-item"><div class="bullet">4</div><div class="text">Строительство дворца для турнира</div></div>';
                document.querySelector(".block4").classList.add("combined");
                document.querySelector(".block4").innerHTML += '<div class="combined-item"><div class="bullet">5</div><div class="text">Размещение гаражей для гостевого автотранспорта</div></div>';
                document.querySelector(".block5").style.display = 'none';
            }
        } else {
            // Separate block1 and block2
            if (document.querySelector(".block2").style.display === 'none') {
                document.querySelector(".block1").classList.remove("combined");
                document.querySelector(".block1").innerHTML = 'Строительство железнодорожной магистрали Москва-Васюки';
                document.querySelector(".block2").style.display = '';
            }

            // Separate block4 and block5
            if (document.querySelector(".block5").style.display === 'none') {
                document.querySelector(".block4").classList.remove("combined");
                document.querySelector(".block4 .text").innerHTML = 'Строительство дворца для турнира';
                document.querySelector(".block5").style.display = '';
            }
        }
        blocks = Array.from(document.querySelectorAll(".block")).filter(block => block.style.display !== 'none');
        createDots();
        showSlide(0);  // Always show the first slide after combining/separating blocks
    }

    prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
    nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

    window.addEventListener("resize", combineBlocks);

    combineBlocks();
});