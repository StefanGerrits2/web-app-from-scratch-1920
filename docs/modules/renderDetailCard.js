// Create HTML template and render it
export default function renderDetailPage(data) {
    const detailCard = document.createElement('article'),
        title = document.createElement('h2'),
        img = document.createElement('img'),
        left_container = document.createElement('div'),
        right_container = document.createElement('div'),
        tagline = document.createElement('p'),
        volume = document.createElement('p'),
        boil_volume = document.createElement('p'),
        alcohol_percentage = document.createElement('p'),
        goBack = document.createElement('a');

    detailCard.setAttribute('class', 'card');
    detailCard.setAttribute('id', data.name);
    left_container.setAttribute('class', 'left-container')
    right_container.setAttribute('class', 'right-container')
    goBack.setAttribute('id', 'goBack')

    title.textContent = data.name;
    tagline.textContent = data.tagline;
    img.src = data.image_url;
    volume.textContent = 'Volume: ' + data.volume;
    boil_volume.textContent = 'Boil volume: ' + data.boil_volume;
    alcohol_percentage.textContent = 'Alcohol by volume: ' + data.abv + '%';
    goBack.textContent = 'Terug';
    goBack.href= '';

    detailCard.appendChild(left_container)
    detailCard.appendChild(right_container)

    left_container.appendChild(title);
    left_container.appendChild(img);
    left_container.appendChild(tagline);

    right_container.appendChild(volume);
    right_container.appendChild(boil_volume);
    right_container.appendChild(alcohol_percentage);
    detailCard.appendChild(goBack)

    /* Hide elements */
    document.querySelector('.cardsDiv').classList.toggle('hide')
    document.querySelector('.pagination__container').classList.toggle('hide')
    document.querySelector('header').classList.toggle('hide')

    return detailCard;
}