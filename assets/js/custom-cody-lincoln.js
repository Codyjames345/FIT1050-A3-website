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

// Event filtering functionality
// Inspired by https://www.w3schools.com/howto/howto_js_filter_elements.asp

const filterButtons = document.querySelectorAll('.filter-button');
const events = document.querySelectorAll('#events .posts article');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        // Update active button styling
        filterButtons.forEach(btn => btn.classList.toggle('primary', btn === button));

        events.forEach(event => {
            const match = filter === 'all' || event.dataset.category === filter
            event.classList.toggle('hidden', !match);
        });

        filterEvents(button.dataset.filter)
    });
});

// Fix weird display of divider lines when filtering events
const eventsArray = Array.from(events);
const postsGrid = document.querySelector('#events .posts');

function filterEvents(category) {
  postsGrid.innerHTML = '';
  const filtered = category === 'all'
    ? eventsArray
    : eventsArray.filter(a => a.dataset.category === category);
  filtered.forEach(a => postsGrid.appendChild(a));
}
