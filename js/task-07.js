const refs = {
    input: document.querySelector("#font-size-control"),
    nameText: document.querySelector("#text"),
};
console.log(refs);

refs.input.addEventListener("input", onInputChange);

function onInputChange() {
    refs.nameText.style.fontSize = `${refs.input.value}px`;
};