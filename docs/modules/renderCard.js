// Create HTML template and render it
export default function renderCard(data) {

    // const template = document.querySelector('#overview-template').innerHTML;
    // const html = Mustache.to_html(template, data);
    // const box = document.querySelector('.overview__container');
    // box.innerHTML = html;

    /* Templating */
    const template = document.querySelector('#overview-template').innerHTML;
    const container = document.querySelector('.overview__container');
    container.insertAdjacentHTML('beforeend', Mustache.to_html(template, data));
}