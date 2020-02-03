fetch('https://cors-anywhere.herokuapp.com/https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
    .then((response) => {
        return response.json();
    })
    .then((cleanData) => {
        cleanData.map(data => displayNames(data))
        console.log(cleanData)
    })

function displayNames(data) {
    var myH2 = document.createElement("h2");
    myH2.innerHTML = data.name
    document.body.appendChild(myH2);

    var myImg = document.createElement("p");
    myImg.innerHTML = data.tagline
    document.body.appendChild(myImg);
}