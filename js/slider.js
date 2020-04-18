export function slider() {
    const images = document.getElementsByClassName("right-section__slider__images__item"),
    progressBar = document.querySelector(".right-section__slider__progress__line"),
    progressive = document.querySelector(".right-section__slider__progress__line__done"),
    prev = document.querySelector(".right-section__slider__progress__btns__prev"),
    next = document.querySelector(".right-section__slider__progress__btns__next"),
    currentNumber = document.querySelector(".right-section__slider__progress__numbers__current"),
    totalNumber = document.querySelector(".right-section__slider__progress__numbers__from");

let current = 0,
    progress;

next.onclick = () => {
    for(let i = 0, len = images.length; i < len; i++) {
        if(images[i].classList.contains("right-section__slider__images__item_current")) {
            images[i].classList.remove("right-section__slider__images__item_current");
            if(i == len - 1) i = -1;
            images[i + 1].classList.add("right-section__slider__images__item_current");
            current = i + 1;
            break;
        }
    }
    progress = 100 / (images.length - 1) * current;
    progressive.style.width = progress + "%";

    from();
}

prev.onclick = () => {
    for(let i = 0, len = images.length; i < len; i++) {
        if(images[i].classList.contains("right-section__slider__images__item_current")) {
            images[i].classList.remove("right-section__slider__images__item_current");
            if(i == 0) i = len;
            images[i - 1].classList.add("right-section__slider__images__item_current");
            current = i - 1;
            break;
        }
    }
    progress = 100 / (images.length - 1) * current;
    progressive.style.width = progress + "%";

    from();
}

document.querySelector(".right-section__slider").onmousedown = (e) => {
    e.preventDefault();
}

function from() {
    current += 1;

    if(current < 10) {
        currentNumber.textContent = "0" + current;
    } else {
        currentNumber.textContent = current;
    }
    
    if(images.length < 10) {
        totalNumber.textContent = "/ 0" + images.length;
    } else {
        totalNumber.textContent = "/ " + images.length;
    }
    
}

from();
}