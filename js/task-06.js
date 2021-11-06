const textInput = document.querySelector("#validation-input");

const inputDataLength = textInput.getAttribute('data-length');

textInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
    if (textInput.value.length === Number(inputDataLength)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
}