# Web app from scratch

## Concept

#### Overview page
![image](https://user-images.githubusercontent.com/45566396/75431221-d4280300-594c-11ea-83a8-6c5cce3facc8.png)

#### Detail page: general
![image](https://user-images.githubusercontent.com/45566396/75431288-ef930e00-594c-11ea-850b-c3ed91827fc2.png)

#### Detail page: Related beers around the same alcohol percentage
![image](https://user-images.githubusercontent.com/45566396/75431532-40a30200-594d-11ea-9c22-543ce1450fa0.png)

### Description

This is a single page web app that uses the PUNK API to receive beers. The beers are shown in the overview page. I fetch 36 beers each time because you cannot fetch all beers in one go. For this sake, I implemented a loadmore button to load in more data. You can click on a beer to checkout the detail page for further information; including ingredients and recipes. There are also related beers shown around the same alcohol percentage. When you click on a related beer you will see the detail page of that beer.

## Features

* Loading in data from the PUNK API
* Loading in more data when you click on a button
* Being able to view a detail page
* Being able to view related beers around the same alcohol by volume on the detail page
* Being able to click a related beer to render the new detail page

Features if I had more time

* Local storage
* Filter / sort on overview page, for example: alcohol by volume, brew date, volume etc

## How it works

#### Actor diagram (needs update)

Explanation here

![image](https://user-images.githubusercontent.com/45566396/74469222-85825f80-4e9c-11ea-9955-d1a7b22684fb.png)

#### Interaction diagram (needs update)

Exlanation here 

![image](https://user-images.githubusercontent.com/45566396/74469284-a5198800-4e9c-11ea-9184-2651bc2925d6.png)

## Installation

### 1. Clone this repository to your computer
Run this command in your terminal:

`git clone https://github.com/StefanGerrits2/web-app-from-scratch-1920`
### 2. Navigate into the root of the folder
Run this command in your terminal:

`cd web-app-from-scratch-1920`

### 3. Viewing the website
Open the `index.html` file in a browser.

>
> ###### NOTE:
> You can't just open your `index.html` file because I use es6 modoules. You need to start a live server to make it work. For example, I use the plugin `Preview on Web Server`.

## API

#### PUNK API

Returns different kinds of beers with a lot of information, some details are:

<details>
    <summary>Click here for the data properties</summary>
        <ul>
            <li>Name</li>
            <li>Tagline</li>
            <li>First brewed</li>
            <li>Description</li>
            <li>Image</li>
            <li>Volume</li>
            <li>Boil volume</li>
            <li>Method</li>
            <li>Ingredients</li>
            <li>Food pairing</li>
            <li>Brewers tips</li>
            <li>Contributed  by</li>
        </ul>
</details>
<br>

* Each IP that makes a request has a rate limit of 3600 requests per hour.
* No key needed
* HTTPS

#### This is how a raw object looks when I fetch it from the API
![image](https://user-images.githubusercontent.com/45566396/75431949-eb1b2500-594d-11ea-92a6-378961052144.png)

#### I transformed my data objects to this:
![image](https://user-images.githubusercontent.com/45566396/75431824-b909c300-594d-11ea-8a44-edd36499667d.png)

## Sources

* [MDN](https://developer.mozilla.org/nl/) - Main source for javascript code
* [Fetch](https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939) - To understand how you can implement good error handling in a fetch

## Credits

* [Guido Bouman](https://github.com/guidobouman) - He helped me transform some data

## Check it out!

* [Click here to open the live link](https://stefangerrits2.github.io/web-app-from-scratch-1920/)

## License

[MIT](https://github.com/StefanGerrits2/web-app-from-scratch-1920/blob/master/LICENSE.txt) © Stefan Gerrits


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
