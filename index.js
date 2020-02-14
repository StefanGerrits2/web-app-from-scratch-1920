import { Fetcher } from './docs/modules/fetch.js';
import transformData from './docs/modules/transformData.js'
import router from './docs/modules/router.js'

// Set standard query values
let topic = 'beers';
let page = '1';
let amount = '12';

// Run main app
loadApp(topic, page, amount)

// Main function
function loadApp(topic, page, amount) {
    // Set url values
    const baseApiUrl = 'https://api.punkapi.com/v2/';
    const url = `${baseApiUrl}${topic}?page=${page}&per_page=${amount}`;

    // Store local storage data
    let storedData = localStorage.getItem('myData');

    // if localstorage is available
    if (storedData) {
        console.log('local storage exists');
        // Parse localstorage to JSON
        let data = JSON.parse(localStorage.getItem('myData'));
        console.log(data);
        // Router
        router(data);
    }
    else {
        // fetch data
        console.log('local storage does NOT exist')
        // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
        return Fetcher.get(url)
            .then(data => transformData(data))
            .then(data => {
                console.log(data);
                // Stringify JSON for localstorage
                localStorage.setItem('myData', JSON.stringify(data));
                // Router
                router(data);
            });
    }
};

// Load more button
document.querySelector('.loadMore').addEventListener('click', renderMoreCards);

function renderMoreCards() {
    // Update query
    page++;
    loadApp(topic, page, amount);
};