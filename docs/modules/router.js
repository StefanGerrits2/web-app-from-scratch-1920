import renderCard from './renderCard.js';
import renderDetailPage from './renderDetailCard.js';

export default function router(data) {
    routie({
        '/': 
            renderCard(data),        
        ':id': (id) => data.beers.forEach(item => {
            if (item.id == id) {
                console.log(item);
                renderDetailPage(item);
            }
        })
    });
}