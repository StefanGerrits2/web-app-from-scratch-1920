// Set standard values
let topic = 'beers'
let page = '1'
let limit = '12'

// Main function
function loadApp(topic, page, limit) {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/${topic}?page=${page}&per_page=${limit}`)
        .then((res) => {
            return res.json();
        })
        .then((rawData) => {
            createList(rawData)
            console.log(rawData)
        })
        .catch(err => console.error(err))
}

// Run main app
loadApp(topic, page, limit);

// Current page
const currentPage = document.getElementById('pagination-count')

// Pagination buttons
const nextPage = document.getElementById('nextPage')
nextPage.addEventListener('click', paginationNext)

function paginationNext() {
    // Add 1 count to current page
    page++
    // Run main app
    loadApp(topic, page, limit)
    // Scroll to the top
    window.scrollTo(500, 0);
}

const previousPage = document.getElementById('previousPage')
previousPage.addEventListener('click', paginationPrevious)

function paginationPrevious() {
    // if page is 1 do nothing
    if(page === 1) {
        //
    }
    else {
        // Remove 1 count from current page
        page--
        // Run main app
        loadApp(topic, page, limit)
        // Scroll to the top
        window.scrollTo(500, 0);
    }
}

// Create HTML template and render it
function createList(data) {
    const cardsDiv = document.getElementById('cardsDiv')
    currentPage.innerHTML = `Page: ${page}`
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