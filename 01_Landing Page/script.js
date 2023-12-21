// Section: Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});






// Section: Navbar Color and Page Load Check
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const originalNavbarColor = getComputedStyle(navbar).backgroundColor;

    if (window.scrollY === 0) {
        navbar.style.backgroundColor = originalNavbarColor;
    }

    // Add the 'loaded' class to the #contact section
    document.getElementById('contact').classList.add('loaded');

    function addLoadedClass() {
        document.getElementById('contact').classList.add('loaded');
    }

    var contactButton = document.querySelector('nav a[href="#contact"]');
    contactButton.addEventListener('click', addLoadedClass);

    if (window.location.hash === '#contact') {
        addLoadedClass();
    }
});






// Section: Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = document.querySelectorAll('.carousel-track img');

    let index = 0;

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        const position = -index * 100 + '%';
        track.style.transform = 'translateX(' + position + ')';
    }
});






// Section: Swipe-Up Button Interaction
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const pictureTextPairs = container.querySelectorAll('.picture, .text');
    const button = document.querySelector('.swipe-up');
    let currentIndex = 0;

    pictureTextPairs.forEach((pair, index) => {
        if (index !== currentIndex) {
            pair.style.display = 'none';
        }
    });

    button.addEventListener('click', function () {
        pictureTextPairs[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 2) % pictureTextPairs.length;
        pictureTextPairs[currentIndex].style.display = 'block';
    });
});







// Section: Automatic Slider Change
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 2000);

    function updateSlider() {
        const position = -currentIndex * 100 + '%';
        sliderContainer.style.transform = 'translateX(' + position + ')';
    }
});
