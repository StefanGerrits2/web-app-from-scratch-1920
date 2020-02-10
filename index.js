import { Fetcher } from './docs/modules/fetch.js';
import renderCard from './docs/modules/renderCard.js';

// Set standard query values
let topic = 'beers';
let page = '1';
let amount = '12';

// Run main app
loadApp(topic, page, amount);

// Main function
function loadApp(topic, page, amount) {
    // Set url values
    const apiUrl = 'https://api.punkapi.com/v2/';
    const url = `${apiUrl}${topic}?page=${page}&per_page=${amount}`;

    return Fetcher.get(url)
        .then(data => {
            console.log(data)
            data.forEach(data => {  
                document.getElementById('cardsDiv').appendChild(renderCard(data));
            });
        });
};

// Pagination buttons
document.getElementById('nextPage').addEventListener('click', renderMoreCards);

function renderMoreCards() {
    // Load more cards
    page++;
    loadApp(topic, page, amount);
};