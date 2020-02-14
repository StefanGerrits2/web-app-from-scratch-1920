import renderCard from './renderCard.js';
import renderDetailCard from './renderDetailCard.js';

export default function router(data) {
    routie({
        '/': data.forEach(data => {  
            document.querySelector('.overview__container').appendChild(renderCard(data));
        }),
        ':id': (id) => data.forEach(item => {
            if (item.name === id) {
                document.querySelector('.details__container').appendChild(renderDetailCard(item));
            }
        })
    });
}