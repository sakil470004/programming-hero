const loadData = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error =>
            console.log(error))

}

const displayData = meals => {
    const container = document.getElementById('user-container')
    container.innerHTML = ''
    meals.meals.map(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('bg-base-100');
        div.classList.add('shadow-xl');
        div.innerHTML = `
        <div class="pb-2">
        <img class='rounded-lg mb-2' src=${meal.strMealThumb} >
        <div class='px-3'>  
        <h2 class="card-title">${meal.strMeal}</h2>
            <p>${meal.strInstructions.substring(0, 25)}  
            <span class='text-red-500'> more....</span></p>
            <div class="card-actions">
                <label for="my-modal-4" onclick="showDetails('${meal.strMeal}')" class="btn btn-primary">Show more</label>

            </div>
            </div>
        </div>
        `
        container.appendChild(div);
    })

}
const showModal = () => {
    const modal = document.getElementById('modal')
    const div = document.createElement('div');
    div.innerHTML = `
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
      <label id='modal-data' class="modal-box relative" for="">
    
    
      </label>
    </label>
        `
    modal.appendChild(div)
}
showModal()
const showDetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0]
            const moduleData = document.getElementById('modal-data');
            const div = document.createElement('div');
            div.innerHTML = `
            <img class='rounded-lg mb-2' src=${meal.strMealThumb} >
            <h3 class="text-lg font-bold">${meal.strMeal}</h3>
            <p class="py-4">${meal.strInstructions}</p>
           `
            moduleData.appendChild(div)
        })
}

document.getElementById('btn-search').addEventListener('click', () => {
    const value = document.getElementById('input-text').value;
    loadData(value)
})







loadData('chicken')