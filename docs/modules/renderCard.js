// Create HTML template and render it
export default function renderCard(data) {

    const card = document.createElement('article'),
        h2 = document.createElement('h2'),
        a = document.createElement('a'),
        p = document.createElement('p'),
        img = document.createElement('img');
    
    card.setAttribute('class', 'card');

    a.textContent = data.name;
    // Set target for routie
    a.href = `#` + data.name;
    p.textContent = data.tagline;
    img.src = data.image_url;

    h2.appendChild(a)

    card.appendChild(h2);
    card.appendChild(img);
    card.appendChild(p);

    return card;
}