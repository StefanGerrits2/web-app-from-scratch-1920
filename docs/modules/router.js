import renderCard from './renderCard.js';
import renderDetailCard from './renderDetailCard.js';

export default function router(data) {
    routie({
        '/': data.forEach(item => {  
            document.querySelector('.overview__container').append(renderCard(item));
        }),
        ':id': (id) => data.forEach(item => {
            if (item.id == id) {
                document.querySelector('.details__container').appendChild(renderDetailCard(item));
            }
        })
    });
}