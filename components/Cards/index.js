// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");
	
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    console.log('test', response)
    let articles = response.data.articles; 
    for(topic in articles) {
        articles[topic].forEach(article => {
            cardContainer.appendChild(createCard(article))
        })
    }
}) 
.catch(error => {
    console.log('ERROR', error)
})
	

function createCard(article) {
    const card = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgContainer = document.createElement("div");
	const img = document.createElement("img");
	const authorName = document.createElement("span"); 
	
	card.classList.add("card");
	headline.classList.add("headline");
	author.classList.add("author");
	imgContainer.classList.add("img-container");
	
	headline.textContent = article.headline;
	img.src = article.authorPhoto;
	authorName.textContent = article.authorName;
	
	card.append(headline);
	card.append(author);
	author.append(imgContainer);
	author.append(authorName);
	imgContainer.append(img);
	
	return card;
} 