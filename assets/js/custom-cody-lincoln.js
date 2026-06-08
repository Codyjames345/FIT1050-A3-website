// Added by Cody Lincoln


// Carousel functionality for the homepage
// Inspired by https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let timer;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function startCarousel() {
    timer = setInterval(() => {
        showSlide((currentSlide + 1) % slides.length);
    }, 6000); // 6 seconds per image
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(timer);
        showSlide(index);
        startCarousel();
    });
});

startCarousel();