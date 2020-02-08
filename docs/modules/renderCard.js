// Create HTML template and render it
export default function renderCard(data) {
    const card = document.createElement('article'),
        h2 = document.createElement('h2'),
        p = document.createElement('p'),
        img = document.createElement('img');
                    
    card.setAttribute('class', 'card')

    h2.textContent = data.name;
    p.textContent = data.tagline;
    img.src = data.image_url;

    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(p)

    return card;
}