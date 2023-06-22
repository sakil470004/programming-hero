document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputIncome = parseFloat(document.getElementById('input-income').value);
    const inputFood = parseFloat(document.getElementById('input-food').value);
    const inputRent = parseFloat(document.getElementById('input-rent').value);
    const inputClothes = parseFloat(document.getElementById('input-clothes').value);
    if (isNaN(inputFood, inputClothes, inputIncome, inputRent)||inputIncome < 0 || inputFood < 0 || inputRent < 0 || inputClothes < 0 ) {
        alert('Please Provide right input')
        return
    }
    const textTotalExpenses = document.getElementById('text-total-expenses');
    const textBalance = document.getElementById('text-balance');
    const totalExpenses = inputFood + inputRent + inputClothes;
    textTotalExpenses.innerText = totalExpenses;
    textBalance.innerText = inputIncome - totalExpenses;
})

document.getElementById('btn-save').addEventListener('click', function () {
    const textSavingAmount = document.getElementById('text-saving-amount');
    const textRemainingBalance = document.getElementById('text-remaining-balance');
    const inputIncome = parseFloat(document.getElementById('input-income').value);
    const inputSave = parseFloat(document.getElementById('input-save').value);
    const textBalance = parseFloat(document.getElementById('text-balance').innerHTML);

    const savingAmount = inputIncome * (inputSave / 100)
    textSavingAmount.innerText = savingAmount;
    textRemainingBalance.innerText = textBalance - savingAmount;
})