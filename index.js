import { Fetcher } from './docs/modules/fetch.js';
import transformData from './docs/modules/transformData.js'
import renderCard from './docs/modules/renderCard.js';
import renderDetailCard from './docs/modules/renderDetailCard.js';

// Set standard query values
let topic = 'beers';
let page = '1';
let amount = '12';

// Run main app
loadApp(topic, page, amount);

// Main function
function loadApp(topic, page, amount) {
    // Set url values
    const baseApiUrl = 'https://api.punkapi.com/v2/';
    const url = `${baseApiUrl}${topic}?page=${page}&per_page=${amount}`;

    // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
    return Fetcher.get(url)
        .then(data => transformData(data))
        .then(data => {
            console.log(data)
            // Router
            routie({
                '/': data.forEach(data => {  
                    document.querySelector('.overview__container').appendChild(renderCard(data));
                }),
                '*': (title) => data.forEach(item => {
                    if (item.name === title) {
                        document.querySelector('.details__container').appendChild(renderDetailCard(item));
                    }
                })
            });
        });
};

// Load more button
document.querySelector('.loadMore').addEventListener('click', renderMoreCards);

function renderMoreCards() {
    // Update query
    page++;
    loadApp(topic, page, amount);
};