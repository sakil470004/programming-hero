function generatePin() {
    const pin = Math.floor(Math.random() * 9000) + 1000
    return pin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const newPin = generatePin();
    document.getElementById('input-generate-pin').value = newPin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const clickedValue = event.target.innerText;
    const inputSubmit = document.getElementById('input-submit')
    const previousInput = inputSubmit.value;
    if (isNaN(clickedValue)) {
        if (clickedValue === 'C') {
            inputSubmit.value = '';
        } else if (clickedValue === '<') {
            const previousInputArray = previousInput.split('');
            previousInputArray.pop();
            const newString = previousInputArray.join('');
            inputSubmit.value = newString;
        }
    } else {
        // set the value to input when number clicked
        inputSubmit.value = previousInput + clickedValue;
    }
})
function displayNotificationFor3s(element1, element2) {
    setTimeout(
        function () {
            element1.style.display = 'none'
            element2.style.display = 'none'
        }, 3000
    )
}

document.getElementById('btn-submit').addEventListener('click', function (event) {
    const tryText = document.getElementById('text-try');
    let tryLeft = parseInt(tryText.innerText)
    if (tryLeft) {
        tryLeft--;
        tryText.innerText = tryLeft;
        if (!tryLeft) {
            event.target.setAttribute('disabled', true)
            event.target.style.backgroundColor='gray'
        }
    }
    console.log(tryLeft)
    const inputSubmit = document.getElementById('input-submit')
    const submittedPin = inputSubmit.value;
    const currentPin = document.getElementById('input-generate-pin').value
    const successElement = document.getElementById('btn-success')
    const failedElement = document.getElementById('btn-failed')
    if (submittedPin === currentPin) {
        failedElement.style.display = 'none'
        successElement.style.display = 'block'
        tryLeft = 3;
        tryText.innerText = tryLeft;
    } else {
        failedElement.style.display = 'block'
        successElement.style.display = 'none'
    }
    displayNotificationFor3s(successElement, failedElement)
})