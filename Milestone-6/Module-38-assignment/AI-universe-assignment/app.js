// global variable
let sort = false;
const loadData = (limit) => {
    toggleProgressBar(true, 0)
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayData(data.data.tools, limit)
            toggleProgressBar(false, 0)
        })
}

// display card data according to situation
const displayData = (data, limit) => {
    const cardContainer = document.getElementById('card-container')
    let tools;
    if (sort) {
        sortDate(data);
    }
    const limitNumber = parseInt(limit)
    if (limitNumber === 0) {
        tools = data.slice(0, data.length);
    } else {
        tools = data.slice(0, limitNumber)
        document.getElementById('btn-see-more').classList.remove('hidden')
    }
    // remove old element
    cardContainer.innerHTML = ``;

    for (const tool of tools) {
        // destructure the object
        const { name, image, id, published_in, features
        } = tool;
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 md:p-6">
                <img class="rounded-lg max-w-full max-h-56"
                    src="${image}"
                    alt="" />
                <div class="mt-6">
                    <h5 class="mb-4 text-2xl font-bold  text-gray-900 ">Features</h5>
                    <ul class="list-decimal text-base pl-5 font-normal text-gray-700">
                        ${features[0] ? '<li class="mb-2">' + features[0] + '</li>' : ''}
                        ${features[1] ? '<li class="mb-2">' + features[1] + '</li>' : ''}
                        ${features[2] ? '<li class="mb-2">' + features[2] + '</li>' : ''}
                        ${features[3] ? '<li class="mb-2">' + features[3] + '</li>' : ''}
                    </ul>
                    <span class="w-full inline-block border border-gray-300 mt-4"></span>
                    <div class="mt-6 flex justify-between">
                        <div>
                            <h5 class="text-2xl font-bold  text-gray-900 mb-4">${name}</h5>
                            <p class="flex gap-3">
                            <img class="w-6" src="./icon/calendar-plus.svg" alt="">
                                ${published_in}
                        </p>
                        </div>
                        <label 
                        for="my-modal-3"
                        onclick="showFullData('${id}')"
                            class="inline-flex items-center m-3 p-3 text-sm font-medium text-center text-white bg-red-100 rounded-full hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-500 ">
                            <!-- icon in svg file -->
                            <img class="w-6" src="./icon/arrow.svg" alt="">
                        </label>
                    </div>
                </div>
            </div>
        `
        cardContainer.appendChild(div)
    }
}
// see more button work
document.getElementById('btn-see-more').addEventListener('click', function (e) {
    loadData(0)
    // hide button after clicked
    e.target.classList.add('hidden')
})
// show full data about current tools
const showFullData = (id) => {
    toggleProgressBar(true, 1)
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayModalData(data.data)
            toggleProgressBar(false, 1)
        })
}
// display modal data
const displayModalData = (tool) => {

    const { accuracy, description, features, image_link, integrations, pricing, input_output_examples } = tool;
    const modalBody = document.getElementById('modal-box-details')
    modalBody.innerHTML = ``;

    const div = document.createElement('div');
    div.classList.add('grid')
    div.classList.add('grid-cols-1')
    div.classList.add('grid-cols-1')
    div.classList.add('md:grid-cols-2')
    div.classList.add('gap-5')

    div.innerHTML = `
    <div class="bg-red-50 border border-red-300 rounded-xl p-3 md:p-7">
    <h5 class="text-2xl font-bold  text-gray-900 mb-4">
    ${description}
    </h5>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-5 font-bold">
        <p class="bg-white m-auto p-5 rounded-xl text-green-600">
        ${pricing ? pricing[0].plan : 'Basic'}
        ${pricing ? pricing[0].price : 'Free OF COST'}
        </p>
        <p class="bg-white m-auto p-5 rounded-xl text-orange-500"> 
        ${pricing ? pricing[1].plan : 'Pro'}
        ${pricing ? pricing[1].price : 'Free OF COST'}
        
        </p>
        <p class="bg-white m-auto p-5 rounded-xl text-red-600">
        ${pricing ? pricing[2].plan : 'Enterprise'}
        ${pricing ? pricing[2].price : 'Free OF COST'}
        </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <h5 class="mb-4 text-2xl font-bold  text-gray-900 ">Features</h5>
            <ul class="list-disc text-base pl-6 font-normal text-gray-700">
                ${features[1]?.feature_name ? '<li class="mb-2">' + features[1].feature_name + '</li>' : ''}
                ${features[2]?.feature_name ? '<li class="mb-2">' + features[2].feature_name + '</li>' : ''}
                ${features[3]?.feature_name ? '<li class="mb-2">' + features[3].feature_name + '</li>' : ''}
                ${features[4]?.feature_name ? '<li class="mb-2">' + features[4].feature_name + '</li>' : ''}
            </ul>
        </div>
        <div>
            <h5 class="mb-4 text-2xl font-bold  text-gray-900 ">Integrations</h5>
            ${!integrations? '<p class="  font-normal text-gray-700">No Data Found</p>':''}
            <ul class="list-disc text-base pl-6 font-normal text-gray-700">
            ${integrations && integrations[0] ? '<li class="mb-2">' + integrations[0] + '</li>' : ''}
            ${integrations && integrations[1] ? '<li class="mb-2">' + integrations[1] + '</li>' : ''}
            ${integrations && integrations[2] ? '<li class="mb-2">' + integrations[2] + '</li>' : ''}
            ${integrations && integrations[3] ? '<li class="mb-2">' + integrations[3] + '</li>' : ''}
              
            </ul>
        </div>
    </div>
        </div>
        <div class="shadow-xl drop-shadow-2xl border-red-300 rounded-xl p-3 md:p-7">
        <div class='relative'>
        ${accuracy && accuracy?.score ? '<span class="badge badge-error text-white font-bold absolute right-4 top-4">Accuracy ' + (accuracy.score * 100) + '%</span>' : ''}   
        <img class="rounded-xl"
                src="${image_link[0]}"
                alt="">
        </div>
            <div class="text-center w-3/4 mx-auto">
                <h5 class="mb-4 mt-6 text-2xl font-bold  text-gray-900">${input_output_examples ? input_output_examples[0]?.input : "No Example Found"}</h5>
                <p class="font-normal text-gray-700">
                ${input_output_examples ? input_output_examples[0]?.output : "Can You give me an example ?"}
                </p>
            </div>
        </div>
   `

    modalBody.appendChild(div)
}
const toggleProgressBar = (status, bar = 0) => {
    const array = ['progress-bar', 'progress-bar2']
    const progressBar = document.getElementById(array[bar])
    if (status) {
        progressBar.classList.remove('hidden')
    }
    else {
        progressBar.classList.add('hidden')
    }
}

// sort by date
const sortDate = (data) => {
    data.sort((a, b) => {
        const d1 = new Date(a.published_in);
        const d2 = new Date(b.published_in);
        return d1 - d2
    }
    );
}
// sort by date btn click
document.getElementById('btn-sort-date').addEventListener('click', function (e) {
    sort = !sort;
    const target = e.target
    if (sort) {
        target.classList.add('bg-green-500')
    } else {
        target.classList.remove('bg-green-500')
    }
    loadData(6)
})
//    for initial show only 6 data send limit 6
loadData(6)
