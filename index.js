import { Fetcher } from './docs/modules/fetch.js';
import renderCard from './docs/modules/renderCard.js'

// Set standard query values
let topic = 'beers'
let page = '1'
let amount = '12'

// Set standard values
const cardsContainer = document.getElementById('cardsDiv')

// Main function
function loadApp(topic, page, amount) {
    // Set url values
    const corsUrl = "https://cors-anywhere.herokuapp.com/" ;
    const apiUrl = "https://api.punkapi.com/v2/";
    const url = `${corsUrl}${apiUrl}${topic}?page=${page}&per_page=${amount}`;

    return Fetcher.get(url)
        .then(data => {
            console.log(data)
            data.forEach(data => {  
                cardsContainer.appendChild(renderCard(data))
            })
        })
}

// Pagination buttons
const loadButton = document.getElementById('nextPage')
loadButton.addEventListener('click', renderMoreCards)

function renderMoreCards() {
    // Load more cards
    page++
    loadApp(topic, page, amount)
}

// Run main app
loadApp(topic, page, amount);