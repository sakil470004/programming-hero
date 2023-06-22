const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = (quote) => {
    document.getElementById('quote').innerText = quote.quote
}
document.getElementById('change-quote').addEventListener('click', function () {
    loadData()
})
loadData()

const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = (users) => {
    const container = document.getElementById('user-container')
    users.map(usr => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('w-96');
        div.classList.add('bg-base-100');
        div.classList.add('shadow-xl');

        div.innerHTML = `
        <div class="card-body">
            <h2 class="card-title">${usr.name}</h2>
            <p>${usr.email}</p>
            <div class="card-actions justify-end">
                <a href=${usr.website} class="btn btn-primary">Website</a>
            </div>
        </div>
        `
        container.appendChild(div);
    })
}
loadUser()