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

const images = [
	`burst-aoN3HWLbhdI-unsplash.jpg`,
	`cedric-vt-ILffJKYd1eA-unsplash.jpg`,
	`eberhard-grossgasteiger-y2azHvupCVo-unsplash.jpg`,
	`vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg`,
	`boxed-water-is-better-6aZp4_KfXT8-unsplash.jpg`,
	`daniel-roe-lpjb_UMOyx8-unsplash.jpg`,
	`boxed-water-is-better-km8IZ4xX9vA-unsplash.jpg`,
	`joshua-earle-ZMcLVBi9xx4-unsplash.jpg`,
	`caleb-jones-J3JMyXWQHXU-unsplash.jpg`,
	`alexander-stanishev-lT5QahSnruU-unsplash.jpg`,
	`sebastian-pichler-sblp4evk2gs-unsplash.jpg`
]

const dir = `images/`

const quoteContainer = document.querySelector('.quote-container')

const setBg = () => {
	const body = document.querySelector('body')
	const quoteCloud = document.querySelector('.quote-cloud')
	const randomColor = Math.floor(Math.random()*16777215).toString(16)
	quoteCloud.style.backgroundColor = `#${randomColor}`
	console.log(randomColor)
	body.style.backgroundColor = `#${randomColor}`
}

/* randomize the index retrieval of the quotes array so that each time the user
clicks on the text rendered to the page, a random quote appears.*/
quoteContainer.addEventListener('click', () => {
	const articleHeading = document.querySelector('h2')
	const blockQuote = document.querySelector('blockquote')
	const quoteCloud = document.querySelector('.quote-cloud')
    const randomIndex = Math.floor(Math.random() * quotes.length)
	const randomImage = Math.floor(Math.random() * images.length)
    articleHeading.innerHTML = ``
	blockQuote.textContent = quotes[randomIndex]
	articleHeading.style.fontWeight = `normal`
	quoteCloud.style.backgroundImage = `url(${dir}${images[randomImage]})`
	quoteCloud.style.backgroundPosition = 'center center'
	quoteCloud.style.backgroundSize = 'cover'
	quoteCloud.style.height = `100%`
	quoteCloud.style.maxHeight = `600px`
	quoteCloud.style.outline = `6px double #000`
	setBg()
})
