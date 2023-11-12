const loadData = (searchText, limitSearch) => {
    //    if anything is not input box it automatically search iphone
    toggleSpinner(true)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : 'iphone'}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data.data, limitSearch)
            toggleSpinner(false)
        })
}
const displayData = (mobiles, limitSearch) => {
    const mobileContainer = document.getElementById('mobiles-container');
    const arrayLength = mobiles.length;
    // is need to show all data
    isDataFound(arrayLength);
    // check search limit 
    if (limitSearch && arrayLength > 10) {
        toggleShowAllButton(true)
        mobiles = mobiles.slice(0, 10)
    } else {
        toggleShowAllButton(false)
    }

    mobileContainer.innerHTML = ''
    mobiles.map(mobile => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
       <div class="card p-4 rounded-4">
           <img src="${mobile.image}" class="card-img-top img-fluid" alt="...">
           <div class="card-body">
               <h5 class="card-title">${mobile.phone_name}</h5>
               <p class="card-text">${mobile.brand}</p>
               <button onclick="showDetails('${mobile.slug}')"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show More</button>
           </div>
       </div>
       `
        mobileContainer.appendChild(div);
    })
}

// show details on click in the card
function showDetails(id) {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const phone=data.data
            const modalTitle = document.getElementById('modal-title');
            modalTitle.innerText = phone.name;
            const phoneDetails = document.getElementById('modal-body');
            phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found'}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    `
        })
}
// button click to search
document.getElementById('btn-search').addEventListener('click', function () {
    searchProcess()
})
const searchProcess = () => {
    const inputText = document.getElementById('search-input').value;
    loadData(inputText, true)
}
document.getElementById('search-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchProcess()
    }
})

const toggleSpinner = (status) => {
    const spinner = document.getElementById('spinner');
    if (status) {
        // const mobileContainer = document.getElementById('mobiles-container')
        // mobileContainer.innerHTML = ''
        spinner.classList.remove('d-none')
    } else {
        spinner.classList.add('d-none')
    }
}

// no data found text toggle
const isDataFound = (length) => {
    const noDataText = document.getElementById('no-data-found')
    if (length === 0) {
        noDataText.classList.remove('d-none')
    } else {
        noDataText.classList.add('d-none')
    }
}
// toggle show all button
const toggleShowAllButton = (status) => {
    const showAllContainer = document.getElementById('show-all-container')
    if (status) {
        showAllContainer.classList.remove('d-none')
    } else {
        showAllContainer.classList.add('d-none')
    }
}
document.getElementById('btn-show-all').addEventListener('click', function () {
    const inputText = document.getElementById('search-input').value;
    loadData(inputText, false)
})

loadData('', true)