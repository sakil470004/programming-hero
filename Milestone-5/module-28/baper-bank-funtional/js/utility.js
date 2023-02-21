function getInputElementById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getTextElementById(textId) {
    const textField = document.getElementById(textId);
    const textValue = parseFloat(textField.innerText);
    return textValue;
}
function setTextElementById(textId, textValue) {
    const textField = document.getElementById(textId);
    textField.innerText = textValue;
}
