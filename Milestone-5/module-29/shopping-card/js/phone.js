document.getElementById('btn-phone-plus').addEventListener('click', function () {
    //   for increment +1
    const newCount = changeInputElementById('input-phone-count', 1);
    // here 1219 is single phone value
    setTotalById('text-phone-total', 1219, newCount);
    calculateTotal()

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    //   for decrement -1
    const newCount = changeInputElementById('input-phone-count', -1)
    setTotalById('text-phone-total', 1219, newCount);
    calculateTotal()
})
