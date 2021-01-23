let slideLine = document.querySelector('.slider__list');
let slides = document.querySelectorAll('.slider__item');
let sliderWidth = document.querySelector('.slider').clientWidth;
let count = 0;
let timer;
autoPlay();

document.querySelector('.slider__arrow-right').addEventListener('click', function () {
    nextSlide();
    clearTimeout(timer);
});

document.querySelector('.slider__arrow-left').addEventListener('click', function () {
    prevSlide();
    clearTimeout(timer);
});

function nextSlide() {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    shiftSlider();
    autoPlay();
}

function prevSlide() {
    count--;

    if (count < 0) {
        count = slides.length - 1;
    }
    shiftSlider();
    autoPlay();
}

function shiftSlider() {
    slideLine.style.transform = 'translate(-' + count * sliderWidth + 'px)';
}

function autoPlay() {
    timer = setTimeout(nextSlide, 4000);
}



