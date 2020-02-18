import renderCard from './renderCard.js';
import renderDetailPage from './renderDetailCard.js';

export default function router(data) {
    routie({
        '/': 
            document.querySelector('.overview__container').append(renderCard(data)),        
        ':id': (id) => data.beers.forEach(item => {
            if (item.id == id) {
                console.log(item);
                document.querySelector('.details__container').append(renderDetailPage(item));
            }
        })
    });
}