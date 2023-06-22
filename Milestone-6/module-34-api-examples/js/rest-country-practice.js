const loadData = () => {
    const url = `https://restcountries.com/v2/all`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = (countries) => {
    const container = document.getElementById('user-container')
    console.log(countries)
    countries.map(country => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('bg-base-100');
        div.classList.add('shadow-xl');
        div.innerHTML = `
        <div class="card-body">
        <img class='rounded-lg mb-2' src=${country.flags.png} >
            <h2 class="card-title">${country.name}</h2>
            <p>${country.region}</p>
            <div class="card-actions">
                <button onclick="showDetails('${country.alpha2Code}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `
        container.appendChild(div);
    })
}
const showDetails = (countryCode) => {
    const url = `https://restcountries.com/v2/alpha/${countryCode}`

    fetch(url)
        .then(res => res.json())
        .then(data => data)
        .then(country => {


            const selectedCountry = document.getElementById('selected-country');
            const div = document.createElement('div');
            div.classList.add('card-body');
            div.innerHTML=''
            div.innerHTML = `
                <img class='rounded-lg mb-2' src=${country.flags.png} >
                    <h2 class="card-title">${country.name}</h2>
                    <p class='text-xs'>${country.region}</p>
                   
                `
            selectedCountry.appendChild(div)
        })
}
loadData()