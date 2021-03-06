const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide img');

// Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+ (-size * counter ) + 'px)';

// Button listener

nextBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+ (-size * counter ) + 'px)';
})