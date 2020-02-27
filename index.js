import { Fetcher } from './docs/modules/fetch.js';
import dataHelper from './docs/modules/dataHelper.js';
import * as routeHandler from './docs/modules/routeHandler.js';

// Set and update current page
let currentPage = 1;

// Set and update all fetched data
const allData = {beers: []};

function getData(currentPage) {
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

// Load more beers
document.querySelector('.loadMore').addEventListener('click', () => {
    // Add currentpage + 1
    currentPage++;
    // Fetch new data
    getData(currentPage);
    // Render beersoverview with updated data
    routeHandler.beersOverview(allData);
});

// Router
routie({
    '': () => {
        getData(currentPage);
        routeHandler.beersOverview(allData);
    },    
    
    ':id': id => routeHandler.detailPage(allData, id),
});