document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositValue = getInputElementById('input-deposit')
    const previousDeposit = getTextElementById('text-deposit')
    setTextElementById('text-deposit', depositValue + previousDeposit)
    const previousBalance = getTextElementById('text-balance');
    setTextElementById('text-balance', previousBalance + depositValue)
})