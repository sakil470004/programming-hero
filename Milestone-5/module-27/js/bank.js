// details
const depositDetails = document.getElementById('deposit-details')
const withdrawDetails = document.getElementById('withdraw-details')
const balanceDetails = document.getElementById('balance-details')
// btn and input
const inputWithdraw = document.getElementById('input-withdraw');
const btnWithdraw = document.getElementById('btn-withdraw');
const inputDeposit = document.getElementById('input-deposit');
const btnDeposit = document.getElementById('btn-deposit');

btnDeposit.addEventListener('click', function () {
    const newDepositMoney = parseFloat(inputDeposit.value);
    const previousBalance = parseFloat(balanceDetails.innerText);
    const previousDeposit = parseFloat(depositDetails.innerText);
    inputDeposit.value = '';
    if (isNaN(newDepositMoney)) {
        alert('Please give proper input')

        return
    }
    depositDetails.innerText = newDepositMoney + previousDeposit;
    balanceDetails.innerText = newDepositMoney + previousBalance;
})

btnWithdraw.addEventListener('click', function () {
    const newWithdrawMoney = parseFloat(inputWithdraw.value);
    const previousBalance = parseFloat(balanceDetails.innerText);
    const previousWithdraw = parseFloat(withdrawDetails.innerText);
    inputWithdraw.value = '';
    if (isNaN(newWithdrawMoney) || (previousBalance < newWithdrawMoney)) {
        alert('Please give proper input')
        return
    }
    withdrawDetails.innerText = newWithdrawMoney + previousWithdraw;
    balanceDetails.innerText = previousBalance - newWithdrawMoney;
})