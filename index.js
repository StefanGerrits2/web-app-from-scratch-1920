import { Fetcher } from './docs/modules/fetch.js';
import dataHelper from './docs/modules/dataHelper.js';
import * as template from '././docs/modules/templates.js';

// Set and update current page
let currentPage = 1;

// Set and update all fetched data
const allData = {beers: []};

function getData() {
    const baseApiUrl = 'https://api.punkapi.com/v2/beers';
    const url = `${baseApiUrl}?page=${currentPage}&per_page=36`;

    // Fetch data
    Fetcher.get(url)
        .then(data => dataHelper(data))
        .then(data => {
            // Store current data plus new data
            data.forEach(item => {
                allData.beers.push(item);
            });
            console.log('alldata', allData);
        }); 
}

function renderOverviewCards() {
    // Get data
    getData();
    // Render overview card with delay for user feedback
    setTimeout(() => {
        template.renderOverviewCard(allData);
    }, 1500);
}

// Load more beers
document.querySelector('.loadMore').addEventListener('click', () => {
    currentPage++;
    renderOverviewCards(currentPage);
});

// Router
routie({
    '/': renderOverviewCards(),    
    
    ':id': id => template.renderDetailCard(allData, id),
});