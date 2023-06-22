const loadData = async () => {
    try {
        const res = await fetch('https://randomuser.me/api/?gender=female&&results=12')
        const data = await res.json();
        displayUser(data)

    }
    catch (error) {
        console.log(error)
    }
}
const displayUser = (users) => {
    const container = document.getElementById('user-container')
   
    users.results.map(usr => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('w-96');
        div.classList.add('bg-base-100');
        div.classList.add('shadow-xl');
        div.innerHTML = `
        <div class="card-body">
        <img class='rounded-lg mb-2' src=${usr.picture.large} >
            <h2 class="card-title">${usr.name.title} ${usr.name.first} ${usr.name.last}</h2>
            <p>${usr.email}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Show more</button>
            </div>
        </div>
        `
        container.appendChild(div);
    })
}
loadData()