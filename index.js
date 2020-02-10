import { Fetcher } from './docs/modules/fetch.js';
import renderCard from './docs/modules/renderCard.js';
import transformData from './docs/modules/transformData.js'

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

    // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
    return Fetcher.get(url)
        .then(data => transformData(data))
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

// Router
routie({
    '': () => console.log('overview'),
    'test': () => console.log('test succesful'),
    '*': (name) => console.log(name),
});