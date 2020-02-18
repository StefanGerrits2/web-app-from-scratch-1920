// import { Fetcher } from './docs/modules/fetch.js';
// import dataHelper from './docs/modules/dataHelper.js';
// import router from './docs/modules/router.js';
// import * as utils from './docs/modules/utils.js';

// // Set standard query values
// let page = 1;
// let amount = 12;

// let allData = [];

// // Run main app
// loadApp(page, amount)

// // Main function
// function loadApp(page, amount) {
//     // Set url values
//     const baseApiUrl = 'https://api.punkapi.com/v2/beers';
//     const url = `${baseApiUrl}?page=${page}&per_page=${amount}`;

//     // Store local storage data
//     let storedData = utils.getStoredData('myData');

//     // if localstorage is available
//     if (storedData && page === 1) {
//         console.log('local storage exists -> No fetch');
//         console.log('all data in local storage: ', storedData);
//         router(storedData, storedData);
//     }
//     else {
//         console.log('local storage does NOT exist -> Fetching')
//         // fetch data
//         // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
//         return Fetcher.get(url)
//             .then(data => transformData(data))
//             .then(data => {
//                 console.log('new data: ',data);
//                 // Stringify JSON for localstorage
//                 data.forEach(item => allData.push(item))
//                 utils.storeData('myData', allData);
//                 console.log('all data: ', allData)
//                 let storedData2 = utils.getStoredData('myData');

//                 // Router
//                 router(data, storedData2);
//             });
//     }
// };

// // Load more button
// document.querySelector('.loadMore').addEventListener('click', renderMoreCards);

// function renderMoreCards() {
//     // Update query
//     page++;
//     console.log(page)
//     loadApp(page, amount);
// };

import { Fetcher } from './docs/modules/fetch.js';
import dataHelper from './docs/modules/dataHelper.js';
import router from './docs/modules/router.js';

// Set standard query values
let page = 1;
let amount = 12;

// Run main app
loadApp(page, amount);

// Main function
function loadApp(page, amount) {
    // Set url values
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=${page}&per_page=${amount}`;

    // fetch data
    // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
    return Fetcher.get(url)
        .then(data => dataHelper(data))
        .then(data => {
            console.log('new data: ', data);
            // Stringify JSON for localstorage
            // Router
            router(data);
        });  
};

// Load more button
document.querySelector('.loadMore').addEventListener('click', renderMoreCards);

function renderMoreCards() {
    // Update query
    page++;
    console.log(page);
    loadApp(page, amount);
};