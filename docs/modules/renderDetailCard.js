// Create HTML template and render it
export default function renderDetailPage(data) {
    const detailCard = document.createElement('article'),
        title = document.createElement('h2'),
        tagline = document.createElement('p'),
        img = document.createElement('img'),
        volume = document.createElement('p'),
        boil_volume = document.createElement('p'),
        goBack = document.createElement('a');

    detailCard.setAttribute('class', 'card');
    detailCard.setAttribute('id', data.name);

    title.textContent = data.name;
    tagline.textContent = data.tagline;
    img.src = data.image_url;
    volume.textContent = data.volume;
    boil_volume.textContent = data.boil_volume;
    goBack.textContent = 'Terug';
    goBack.href= '';

    detailCard.appendChild(title);
    detailCard.appendChild(img);
    detailCard.appendChild(tagline);
    detailCard.appendChild(volume);
    detailCard.appendChild(boil_volume);
    detailCard.appendChild(goBack)

    return detailCard;
}