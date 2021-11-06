const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBodyChangeBgColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    spanColor.textContent = getRandomHexColor();
}

button.addEventListener("click", getBodyChangeBgColor);