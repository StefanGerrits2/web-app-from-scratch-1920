import * as template from './templates.js';

export default function router(data) {
    routie({
        '/': template.renderOverviewCard(data),        
        ':id': (id) => data.beers.forEach(item => {
            if (item.id == id) {
                console.log(item);
                template.renderDetailCard(item);
            }
        })
    });
}