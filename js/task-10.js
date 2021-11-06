function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let fragment = document.createDocumentFragment();
    amount = inputEl.value;
    for (let i = 0; i < amount; i += 1) {
        let size = 30 + i * 10;
        const createNewBox = document.createElement("div");
        createNewBox.style.width = `${size}px`;
        createNewBox.style.height = `${size}px`;
        createNewBox.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(createNewBox);
    }
    inputEl.value = "";
    boxes.appendChild(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}