const quotes = [
    `Dancing is silent poetry. - Simonides`,
    `It does not matter how slowly you go, so long as you do not stop. — Confucius`,
    `Wait a minute, wait a minute. You ain\'t heard nothin\' yet! - The Jazz Singer`,
    `One morning I shot an elephant in my pajamas. How he got in my pajamas, I don\'t know. - Animal Crackers`,
    `Do, or do not. There is no "try". - Star Wars: Empire Strikes Back`,
    `Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth. - Sherlock Holmes`,
    `I can write better than anybody who can write faster, and I can write faster than anybody who can write better. - A. J. Liebling`,
    `The significant problems we face cannot be solved at the same level of thinking we were at when we created them. - Albert Einstein`,
    `Everybody pities the weak. Jealousy you have to earn. - Arnold Schwarzenegger`,
    `Mother of mercy, is this the end of Rico? - Little Caesar`,
    `I have not failed. I've just found 10,000 ways that won't work. - Thomas Alba Edison`
]

const blockQuote = document.querySelector('blockquote')
const articleHeading = document.querySelector('h2')
const quoteContainer = document.querySelector('.quote-container')

articleHeading.style.fontWeight = `normal`

/* randomize the index retrieval of the quotes array so that each time the user
clicks on the text rendered to the page, a random quote appears.*/
quoteContainer.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	articleHeading.innerHTML = ``
	blockQuote.textContent = quotes[randomIndex]
})
