// Set standard values
let topic = 'beers'
let page = '1'
let limit = '10'

// Main function
function loadApp(topic, page, limit) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/${topic}?page=${page}&per_page=${limit}`)
        .then((response) => {
            return response.json();
        })
        .then((rawData) => {
            createList(rawData)
            console.log(rawData)
        })
}

// Run main app
loadApp(topic, page, limit);

const nextPage = document.getElementById('nextPage')
nextPage.addEventListener('click', paginationNext)

function paginationNext() {
    page++
    loadApp(topic, page, limit)
}

const previousPage = document.getElementById('previousPage')
previousPage.addEventListener('click', paginationPrevious)

function paginationPrevious() {
    if(page === 1) {
        //
    }
    else {
        page--
        loadApp(topic, page, limit)
    }
}

function createList(data) {
    const cardsDiv = document.getElementById('cardsDiv')

    // Create a card for each beer
    const cards = data.map(data => {
        return `
            <article id="cardDiv">
                <h2 class="name">${data.name}</h2>
                <img src="${data.image_url}"/>
                <p class="tagline">${data.tagline}</p>
            </article>
        `;
    }).join('');
    cardsDiv.innerHTML = cards
}
   
// function displayData(data) {
//     // Create an article for each beer item
//     let cardDiv = document.createElement("article")
//     cardsDiv.appendChild(cardDiv);

//     // Append beer name
//     const myH2 = document.createElement("h2");
//     myH2.textContent = data.name
//     cardDiv.appendChild(myH2);

//     // Append image
//     const image =  document.createElement("div");   
//     image.innerHTML += `<img src="${data.image_url}" />`;
//     cardDiv.appendChild(image);

//     // Append tagline
//     const tagLine = document.createElement("p");
//     tagLine.textContent = data.tagline
//     cardDiv.appendChild(tagLine);
// }