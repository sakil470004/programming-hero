const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', function () {
    const email = inputEmail.value;
    const password = inputPassword.value;
    if (email === '' || password === '') {
        alert('Account cara baper hotel khola na ja bagg');
        return
    }
    if (email === 'sakil@gmail.com' && password === '12345') {
        console.log(email, password)
        inputEmail.value = '';
        inputEmail.password = '';
      window.location.href='bank.html'
    } else {
        alert('Ja bagg bul ditacos')
        return
    }
})
