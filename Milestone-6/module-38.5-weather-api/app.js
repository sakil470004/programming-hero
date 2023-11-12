const API_KEY = '5180e2a9831feb2143323d6eb7c14507'

const getData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => console.log(error))
}
const displayData = (data) => {
    document.getElementById('text-temp').innerText = data?.main?.temp;
    document.getElementById('text-city').innerText = data?.name;
    document.getElementById('text-weather').innerText = data?.weather[0]?.main;
}


document.getElementById('btn-search').addEventListener('click', () => {
    const searchText = document.getElementById('text-input').value;
    getData(searchText)
})
document.getElementById('text-input').addEventListener('keypress', (e) => {
    const key = e.key
    if (key === 'Enter') {
        getData(e.target.value)
    }
})

getData('dhaka')