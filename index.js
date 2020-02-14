import { Fetcher } from './docs/modules/fetch.js';
import transformData from './docs/modules/transformData.js';
import router from './docs/modules/router.js';
import * as utils from './docs/modules/utils.js';

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
    let storedData = utils.getStoredData('myData');

    // if localstorage is available
    if (storedData) {
        console.log('local storage exists');
        // Parse localstorage to JSON
        let data = utils.getStoredData('myData');
        console.log(data);
        // Router
        router(data);
    }
    else {
        console.log('local storage does NOT exist')
        // fetch data
        // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
        return Fetcher.get(url)
            .then(data => transformData(data))
            .then(data => {
                console.log(data);
                // Stringify JSON for localstorage
                utils.storeData('myData', data);
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