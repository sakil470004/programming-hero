function changeInputElementById(inputId, countValue) {
    const inputElement = document.getElementById(inputId);
    const inputValue = parseInt(inputElement.value);
    const newValue = inputValue + countValue;
    inputElement.value = newValue;
    return newValue;
}
function setTotalById(textBoxId, itemValue, itemCount) {
    const textElement = document.getElementById(textBoxId);
    const total = itemValue * itemCount
    textElement.innerText = total;
}
function calculateTotal() {
    const phoneTotal = document.getElementById('text-phone-total');
    const phoneTotalValue = parseFloat(phoneTotal.innerText);
    const caseTotal = document.getElementById('text-case-total');
    const caseTotalValue = parseFloat(caseTotal.innerText);
    // set Sub total
    const totalAmount = phoneTotalValue + caseTotalValue;
    document.getElementById('text-subtotal').innerText = totalAmount;
    // calculate tax 10%
    const tax = parseFloat((totalAmount * 0.1).toFixed(2));
    document.getElementById('text-tax').innerText = tax;
    // calculate total
    const totalBill = tax + totalAmount;
    document.getElementById('text-total').innerText = totalBill;

}