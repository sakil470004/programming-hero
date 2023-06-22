let selectedValue = 0;
let globalLimit = 9;
const loadData = (fileName, limit = 9) => {
    const url = `./json-file/${fileName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data, limit))
}
const displayData = (data, limit) => {
    const users = data.slice(0, limit);
    // console.log(users[1])
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ``
    users.map((user, index) => {
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
                 <div class="card">
                    <img src="${user?.squareImage}" class="card-img-top" alt="..." loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title">${user?.personName
            }</h5>
                         <p class="card-text">${user?.bios[0]}</p>
                        <button class="btn btn-info">Show More</button>
                    </div>
                </div>
        `
        cardContainer.appendChild(div)
    })
}

function showFullDetails(user) {
    console.log(user)
}

function selectUrl (value, limit = 9) {
    if (limit == 9) {
        globalLimit = 9
    }
    console.log(globalLimit,limit)
    switch (value) {
        case 0:
            loadData('AllBillionaires.json', limit)
            break;
        case 1:
            loadData('ByIndustryFashion.json', limit)
            break;
        case 2:
            loadData('ByIndustryInvestment.json', limit)
            break;
        case 3:
            loadData('ByIndustryTechnology.json', limit)
            break;
        case 4:
            loadData('ByStateHawaii.json', limit)
            break;
        case 5:
            loadData('ByStateTexas.json', limit)
            break;
        case 6:
            loadData('ByStateWashington.json', limit)
            break;
        case 7:
            loadData('ByStateZhejiang.json', limit)
            break;
        case 8:
            loadData('Richest_People_API.json', limit)
            break;
        case 9:
            loadData('ByIndustryFinance.json', limit)
            break;
        default:
            loadData('AllBillionaires.json')
            break;
    }
}
document.getElementById('sort-order').addEventListener('change', function (e) {
    const sortValue = parseInt(e.target.value);
    selectUrl(sortValue);
    selectedValue = sortValue;

})
document.getElementById('btn-load-more').addEventListener('click', function () {
    globalLimit += 9
    selectUrl(selectedValue, globalLimit)
})



loadData('AllBillionaires.json', 9)

