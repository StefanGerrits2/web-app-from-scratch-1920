fetch('https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers?page=1&per_page=80')
    .then((response) => {
        return response.json();
    })
    .then((rawData) => {
        rawData.map(rawData => displayData(rawData))
        console.log(rawData)
    })

const cardsDiv = document.getElementById("cardsDiv")
    document.body.appendChild(cardsDiv);

function displayData(data) {
    // Create an article for each beer item
    let cardDiv = document.createElement("article")
    cardsDiv.appendChild(cardDiv);

    // Append beer name
    const myH2 = document.createElement("h2");
    myH2.textContent = data.name
    cardDiv.appendChild(myH2);

    // Append image
    const image =  document.createElement("div");   
    image.innerHTML += '<img src="' + data['image_url'] + '" />';
    cardDiv.appendChild(image);

    // Append tagline
    const tagLine = document.createElement("p");
    tagLine.textContent = data.tagline
    cardDiv.appendChild(tagLine);
}