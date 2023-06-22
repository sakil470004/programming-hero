document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawValue = getInputElementById('input-withdraw')
    const previousDeposit = getTextElementById('text-withdraw')
    setTextElementById('text-withdraw', withdrawValue + previousDeposit)
    const previousBalance = getTextElementById('text-balance');
    setTextElementById('text-balance', previousBalance - withdrawValue)
})