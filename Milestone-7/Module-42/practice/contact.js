const getInputValueById = (id) => {
    const element = document.getElementById(id);
    const value = element.value;
    return value;
}
const setInputElementById = (id, value) => {
    const element = document.getElementById(id);
    element.value = value;
}
const sendToLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
const deleteToLocal = (key) => {
    localStorage.removeItem(key)
}
const getDataFormLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data) {
        return data;
    }
    return '';
}
document.getElementById('btn-send-name').addEventListener('click', function () {
    const name = getInputValueById('input-name');
    sendToLocalStorage('name', name);
})
document.getElementById('btn-delete-name').addEventListener('click', function () {
    deleteToLocal('name')
    setInputElementById('input-name', '');
})
//2
document.getElementById('btn-send-email').addEventListener('click', function () {
    const email = getInputValueById('input-email');
    sendToLocalStorage('email', email);
})
document.getElementById('btn-delete-email').addEventListener('click', function () {
    deleteToLocal('email')
    setInputElementById('input-email', '');

})
//3
document.getElementById('btn-send-msg').addEventListener('click', function () {
    const msg = getInputValueById('input-msg');
    sendToLocalStorage('msg', msg);
})
document.getElementById('btn-delete-msg').addEventListener('click', function () {
    deleteToLocal('msg')
    setInputElementById('input-msg', '')
})

//reset
document.getElementById('btn-reset').addEventListener('click', function () {
    localStorage.clear()
    setInputElementById('input-name', '');
    setInputElementById('input-email', '');
    setInputElementById('input-msg', '');
})
//send all
document.getElementById('btn-send-all').addEventListener('click', function () {
    const nameArray=['name','email','msg']
    const len=nameArray.length
    for(let i=0;i<len;i++){
        const data = getInputValueById(`input-${nameArray[i]}`);
        sendToLocalStorage(nameArray[i], data);
    }
})

const displayElementsData = () => {
    const localName = getDataFormLocalStorage('name')
    const localEmail = getDataFormLocalStorage('email')
    const localMSG = getDataFormLocalStorage('msg')
    setInputElementById('input-name', localName);
    setInputElementById('input-email', localEmail);
    setInputElementById('input-msg', localMSG);

}
displayElementsData()

