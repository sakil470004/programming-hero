const inputBox = document.getElementById('input-text');

function setStyleByClassName(className, currentButton) {
    if (inputBox.classList.contains(className)) {
        inputBox.classList.remove(className)
        currentButton.classList.remove('border-red-600')
        currentButton.classList.remove('bg-red-200')
    } else {
        inputBox.classList.add(className)
        currentButton.classList.add('border-red-600')
        currentButton.classList.add('bg-red-200')
    }
}

document.getElementById('btn-bold').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'font-bold'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-italic').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'italic'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-underline').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'underline'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-text-left').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'text-left'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-text-right').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'text-right'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-text-center').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'text-center'
    setStyleByClassName(className, currentButton);
})
document.getElementById('btn-align-justify').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'text-justify'
    setStyleByClassName(className, currentButton);
})
// font case
document.getElementById('btn-font-case').addEventListener('click', function (event) {
    const currentButton = event.target;
    const className = 'uppercase'
    setStyleByClassName(className, currentButton);
})
// text-size
document.getElementById('btn-text-size').addEventListener('input', function (event) {
    const value = event.target.value;
    if (value > 16) {
        inputBox.style.fontSize = value + 'px';
    }
})
// color
document.getElementById('btn-color').addEventListener('input', function (event) {
    const value = event.target.value
    inputBox.style.color = value
})
