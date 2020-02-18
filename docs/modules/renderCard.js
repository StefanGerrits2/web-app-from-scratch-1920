// Create HTML template and render it
export default function renderCard(data) {
    // Create elements
    // const 
    //     card = document.createElement('article'),
    //     title = document.createElement('h2'),
    //     titleLink = document.createElement('a'),
    //     img = document.createElement('img'),
    //     imgLink = document.createElement('a'),
    //     p = document.createElement('p');

    // // Append data
    // titleLink.textContent = item.name;
    // p.textContent = item.tagline;
    // img.src = item.image_url;

    // // Set hrefs for router
    // titleLink.href = imgLink.href = `#` + item.id;

    // // Append data 
    // title.appendChild(titleLink)
    // imgLink.appendChild(img)

    // card.appendChild(title);
    // card.appendChild(imgLink);
    // card.appendChild(p);

    // return card;

    const template = document.querySelector('#overview-template').innerHTML;
    const html = Mustache.to_html(template, data);
    const box = document.querySelector('.overview__container');
    box.innerHTML = html;
}