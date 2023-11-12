document.getElementById('btn-case-plus').addEventListener('click', function () {
    //   for increment 1
    const newCount = changeInputElementById('input-case-count', 1)
    setTotalById('text-case-total', 59, newCount);
    calculateTotal()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    //   for decrement -1
    const newCount = changeInputElementById('input-case-count', -1)
    setTotalById('text-case-total', 59, newCount);
    calculateTotal()
})
