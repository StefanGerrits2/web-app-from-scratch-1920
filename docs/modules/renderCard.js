// Create HTML template and render it
export default function renderCard(data) {
    // Create elements
    const 
        card = document.createElement('article'),
        title = document.createElement('h2'),
        titleLink = document.createElement('a'),
        img = document.createElement('img'),
        imgLink = document.createElement('a'),
        p = document.createElement('p');

    // Append data
    titleLink.textContent = data.name;
    p.textContent = data.tagline;
    img.src = data.image_url;

    // Set hrefs for router
    titleLink.href = imgLink.href = `#` + data.name;

    // Append data 
    title.appendChild(titleLink)
    imgLink.appendChild(img)

    card.appendChild(title);
    card.appendChild(imgLink);
    card.appendChild(p);

    return card;
}