const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

function changeImageSize() {
    const size = slider.value * 3;
    image.style.width = `${size}px`;
}

slider.addEventListener(
    "input",
    _.debounce(changeImageSize, 200)
);


const box = document.getElementById("box");

function moveBox(event) {
    box.style.left = event.clientX + "px";
    box.style.top = event.clientY + "px";
}

document.addEventListener(
    "mousemove",
    _.debounce(moveBox, 100)
);