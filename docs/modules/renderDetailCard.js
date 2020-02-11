// Create HTML template and render it
export default function renderDetailPage(data) {
        // Append data
        const title = document.createElement('h2'),
            img = document.createElement('img'),
            tagline = document.createElement('p'),
            volume = document.createElement('p'),
            boil_volume = document.createElement('p'),
            alcohol_percentage = document.createElement('p'),
            brewers_tips = document.createElement('p'),
            goBack = document.createElement('a'),

        // Append containers
            detailCard = document.querySelector('.article-detail__container'),
            left_container_content = document.querySelector('.left__container-content'),
            right_container_content = document.querySelector('.right__container-content'),
            left_container = document.querySelector('.left__container'),
            right_container = document.querySelector('.right__container');

    detailCard.setAttribute('id', data.name);
    goBack.setAttribute('id', 'goBack')

    title.textContent = data.name;
    tagline.textContent = data.tagline;
    img.src = data.image_url;
    volume.textContent = 'Volume: ' + data.volume;
    boil_volume.textContent = 'Boil volume: ' + data.boil_volume;
    alcohol_percentage.textContent = 'Alcohol by volume: ' + data.abv + '%';
    brewers_tips.textContent = 'Brewers tips: ' + data.brewers_tips;
    goBack.textContent = 'Terug';
    goBack.href= '';

    left_container.appendChild(left_container_content)
    right_container.appendChild(right_container_content)

    left_container_content.appendChild(title);
    left_container_content.appendChild(img);
    left_container_content.appendChild(tagline);

    right_container_content.appendChild(volume);
    right_container_content.appendChild(boil_volume);
    right_container_content.appendChild(alcohol_percentage);
    right_container_content.appendChild(brewers_tips);
    detailCard.appendChild(goBack);

    /* Hide elements */
    document.querySelector('.overview__container').classList.toggle('hide');
    document.querySelector('.pagination__container').classList.toggle('hide');
    document.querySelector('header').classList.toggle('hide');

    /* Show elements */
    document.querySelector('.details__container').classList.toggle('show');
    document.querySelector('.details__container').classList.toggle('show-details');

    return detailCard;
}