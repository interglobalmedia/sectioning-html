# Required Going in to Project 3

**Note 3.27.21**: The following below should be in place for Project 3 instead of Project 2. It makes more sense because the below is also required for the structure of the Quotes Project 3. So the below will be part of the Project 3 grade.

1. You must have a completed site navigation both for desktop and mobile in regards to your html and CSS. If you would like to give the JavaScript a shot, please go ahead, but it is not required at this time. I am more concerned with your getting your HTML markup structure and related CSS code down first.
2. You must have a Sticky Footer in place. Not a “sticky footer” hack that is not reusable and would have to be refactored each time you create a new page with new content. But the HTML markup I have implemented in each page necessary for the creation of the Sticky Footer in your external stylesheet:
	a. The addition of the opening main tag right below the opening body tag. The addition of the class attribute inside the opening main tag with the value of “Site-content”. This is the class you will be using in your external stylesheet to target this HTML element.
	b. The addition of the closing main tag right above the opening footer tag. The addition of the class attribute inside the opening footer tag with the value of “site-credits”. This is the class you need towards the creation of the Sticky Footer in your external stylesheet.

	c. The CSS code necessary for the Sticky Footer styling:  

```css
/* Sticky Footer Styling */
html,
body {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
}

.Site-content {
    flex: 1 0 auto;
}

.site-credits {
    flex-shrink: 0;
}

/* End Sticky Footer Styling */
```

3. The HTML markup necessary for the responsive site navigation:

```html5
<header class="header">
	<nav class="navbar">
		<a href="index.html" class="logo">
			<img class="brand” src="images/portfolio_brand.png" alt="brand">
		</a>
		<button class="hamburger"></button>
		<ul class="main-nav">
			<li>
				<a class="menu-link" href="index.html">Home</a>
			</li>
			<li>
				<a class="menu-link" href="portfolio.html">Portfolio</a>
			</li>
			<li>
				<a class="menu-link" href="resume.html">Résumé</a>
			</li>
			<li>
				<a class="menu-link" href="about.html">About</a>
			</li>
			<li>
				<a class="menu-link" href="contact.html">Contact</a>
			</li>
		</ul>
	</nav>
</header>
```

The associated code for the above is the following:

```css
/* nav styles using Flexbox (screens greater than 899px) */
/* Logo Styling */

.header {
	margin-top: 0;
}

.header, .index-header {
	background: rgba(104, 151, 187, 1);
}

.index-header .logo, .header .logo {
	padding-top: 0.25rem;
}

.logo {
	height: 100%;
	max-height: 250px;
	max-width: 187.50px;
    text-align: center;
    text-decoration: none;
	width: 100%;
}

.brand {
	height: auto;
	margin-top: 0;
	max-width: 7.8125rem;
	width: 100%;
}
/* End Header Logo Styling */
/* nav styles using Flexbox (screens greater than 899px) */
.navbar {
    background: transparent;
    width: 100vw;
	display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
}

.main-nav {
	width: 100vw;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
	margin-right: 1rem;
	margin-top: 2rem;
}

li {
    font-size: 2.75vh;
    list-style-type: none;
    margin: 0.5vw;
}

a {
    color: #000;
    cursor: pointer;
    padding: 2vw;
    text-decoration: none;
}

a:hover {
    color: #800080;
}

.hamburger {
    display: none;
}

/* End nav styles using Flexbox (screens greater than 899px) */
/* media query for site navigation for screens smaller than 900px */
@media (max-width: 899px) {
    .header {
        background: rgba(104, 151, 187, 1);
        margin-top: 0;
        position: sticky;
        top: 0;
    }

	.header .logo, .index-header .logo {
		padding-top: 1.5rem;
	}

	.brand {
		margin-top: -1.25rem;
		width: 100%;
		max-width: 7.8125rem;
		height: auto;
	}

    li {
        margin: 0 0 0 1.5rem;
    }

    a {
        display: block;
    }

    /* Responsive Hamburger menu styling */
    .hamburger {
        background-color: transparent;
        /* show the hamburger menu image */
        background-image: url("https://ljc-dev.github.io/testing0/ham.svg");
        background-size: 100%;
        border: none;
        cursor: pointer;
        display: block;
        height: 36px;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 36px;
        /* always keep ham on top of everything */
        z-index: 10000;
    }

    /* change hamburger image to close */
    .showClose {
        background-image: url("https://ljc-dev.github.io/testing0/ham-close.svg");
        background-size: 100%;
    }

    .main-nav {
		display: block;
        background: #6897BB;
        height: 100vh;
        left: 0;
		margin-top: 0;
		padding-top: 5rem;
        overflow-y: hidden;
        position: fixed;
        top: 0;
        /* hide the menu above the screen by default */
        transform: translateY(-100%);
        /* transition adds a little animation when sliding in and out the menu */
        transition: transform 0.2s ease;
        width: 100vw;
        /* needed for me because of my intro box in index.html.
		Otherwise navigation backgrop would be behind the intro box when opened */
        z-index: 10;
    }

    .showNav {
        /* show the menu */
        transform: translateY(0);
    }
}

/* End media query for site navigation for screens smaller than 900px */
```

This is actually a refactor of my original HTML markup for the site navigation and CSS code. It will probably differ slightly from yours. I think it works better, but I also created my own portfolio_brand.png file using Adobe Illustrator, because I wanted the logo to look a certain way.

This is totally not required. You can simply use the text content approach as we did initially. The HTML markup for this approach remains intact in the Basic Responsive Navigation Slide Deck:

```html5
/* The opening header tag is for the portfolio.html page. The opening header tag for the index.html page, if you are following my lead, would contain a class attribute value of “index-header” instead of “header”
<header class="header">
	<a class="logo" href="#">MDC</a>
	<button class="hamburger" aria-label="Right-Align"></button>
	<nav class="navbar">
		<ul>
			<li>
				<a class="menu-link"
				   href="index.html">Home</a>
			</li>
			<li>
				<a class="menu-link"
				   href="portfolio.html">Portfolio</a>
			</li>
			<li>
				<a class="menu-link"
				   href="resume.html">Résumé</a>
			</li>
			<li>
				<a class="menu-link"
				   href="about.html">About</a>
			</li>
			<li>
				<a class="menu-link"
				   href="contact.html">Contact</a>
			</li>
		</ul>
	</nav>
</header>
```

The associated CSS code:

```css
/* nav styles using Flexbox (screens greater than 899px) */
/* Logo Styling .index-header class targets the header element in index.html */
.header, .index-header {
    margin-top: 2rem;
}

.header .logo, .index-header .logo {
    font-size: 2.25rem;
    height: 76px;
    letter-spacing: 0.07rem;
    text-align: center;
    text-decoration: none;
    vertical-align: bottom;
    width: 93.44px;
}

/* End Header Logo Styling */

/* nav styles using Flexbox (screens greater than 899px) */
nav {
    /* background: #D6EFFF; */
	/* changed to the below in the production version of the portfolio site
	for desktop navigation (> 899px) */
	background: transparent;
	width: 100vw;
}

ul {
    display: flex;
    justify-content: flex-end;
	margin-bottom: 1.5rem;
	/* added in my production styling of the ul for the desktop navigation
	greater than 899px */
	margin-top: -2rem;
}

li {
	font-size: 2.75vh;
    list-style-type: none;
    /* margin: 2vw; */
	/* changed to the below in my production styling of the ul for the desktop
	navigation greater than 899px */
	margin: 0.5vw;
}

a {
	color: black;
	cursor: pointer;
    padding: 2vw;
	text-decoration: none;
}

a:hover {
    /* color: #2f6690; */
	/* changed in production portfolio site for desktop navigation
	(greater than width of 899px)*/
	color: #800080;
}

.hamburger {
	display: none;
}

/* End nav styles using Flexbox (screens greater than 899px) */

/* media query for site navigation for screens smaller than 900px */
@media (max-width: 899px) {

	.header {
		background: rgba(104, 151, 187, 1);
		margin-top: 0;
		position: sticky;
		top: 0;
	}

	/* separate styling for the header in index.html because did not make it sticky
	or add abackground because there is no scroll. Not enough content! Tested on iphone4 */
	.index-header .logo {
		margin-top: 0.25rem;
	}

	.header .logo {
		padding-top: 1rem;
	}

    ul {
		/* display: block; */
        flex-direction: column;
		margin-top: 5rem;
    }
    li {
        margin: 0 0 0 1.25rem;
    }
    a {
        display: block;
    }

	/* Responsive Hamburger menu styling */
	.hamburger {
        background-color: transparent;
        /* show the hamburger menu image */
        background-image: url("https://ljc-dev.github.io/testing0/ham.svg");
        background-size: 100%;
        border: none;
        cursor: pointer;
        display: block;
        height: 36px;
        position: absolute;
        right: 20px;
        top: 20px;
        width: 36px;
        /* always keep ham on top of everything */
        z-index: 1000;
    }

	/* change hamburger image to close */

	.showClose {
        background-image: url("https://ljc-dev.github.io/testing0/ham-close.svg");
        background-size: 100%;
    }

	.navbar {
        background: #6897BB;
        height: 100vh;
        left: 0;
        overflow-y: hidden;
        position: fixed;
        top: 0;
        /* hide the menu above the screen by default */
        transform: translateY(-100%);
        /* transition adds a little animation when sliding in and out the menu */
        transition: transform 0.2s ease;
        width: 100vw;
		/* needed for me because of my intro box in index.html.
		Otherwise navigation backgrop would be behind the intro box when opened */
		z-index: 10;
    }

	.showNav {
        /* show the menu */
        transform: translateY(0);
    }
}

/* End media query for site navigation for screens smaller than 900px */
```

4. Project 1 REQUIRES that you create TWO PAGES. One is the index.html page which represents the home page/landing page. It should be named index.html page. NOT home.html page or something like that and then creating a dummy, empty index.html page so you don’t have to cut and paste the contents of the home.html page into the index.html page. Because that is all it takes!!!! I will continue to take off points for such hacks. I will also continue to take off points for submission of ONLY ONE PAGE for Project 1.

Whoever does not have any ideas for a home page, you can follow my lead with my index.html page. My production site is https://www.letsbsocial.nyc/.

The Sectioning HTML slide deck repository, which houses the production markup, CSS code, and JavaScript for my site, can be followed here: https://github.com/interglobalmedia/sectioning-html

5. You must have actual attribution links for your Creative Commons images. NOT ATTRIBUTION TEXT. Attribution text does not an attribution link make. OK? So go back to your images in Creative Commons and find the attribution link for the image, the photographer, and the Creative Commons license. I will continue to take off points for omission of these attribution links.
6. You must have a media query for your CSS Grid columns in your portfolio.html page. The media query for transforming the CSS Grid 3 column layout to one column is the following:

```css
@media (max-width: 799px) {
    section {
        display: block;
        margin: 0 auto;
        width: 97.5%;
    }
}
```

You can also opt to do the following:

```css
section {
    grid-template-columns: repeat(1, 1fr);
}
```

And, in case if you have not yet styled your 3 column layout, the following CSS code does that:

```css
section {
	display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

It gets you to the same place. Either way is valid.

7. make sure you are using the figure element and the figcaption element inside your portfolio.html page. So on a basic level, the HTML markup for your images should be at least something like the following:

```html5
/* Don't know where everyone's individual h1 elements are, I am just placing one here simply as a demonstration. */
<h1>Some text content here</h1>
<section>
	<figure>
		<img src="https://live.staticflickr.com/2535/4188650592_d245f48434_b.jpg" alt="Nature bird">
		figcaption>
			<p class="caption"><a class="attribution-link"
				   href="https://www.flickr.com/photos/29468339@N02/4188650592">"Nature
					bird"</a> by <a class="attribution-link"
				   href="https://www.flickr.com/photos/29468339@N02">@Doug88888</a>
				is licensed under <a class="attribution-link"
				   href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html">CC BY-NC-SA 2.0</a>
			</p>
		</figcaption>
	</figure>
</section>
```

Then you could add the following descendant selector in your external stylesheet:

```css
/* p element caption class styling in portfolio.html - wraps around the entire CC attribution */
p.caption a {
    font-style: italic;
    padding: 0;
    text-align: center;
}
/* End p element caption class styling in portfolio.html - wraps around the entire CC attribution */
```

As for the figure and figcaption styling, you could have something like the following in place:

```css
/* image styling */
img {
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
}

figure {
    border: 1px solid;
    display: block;
    margin: 4rem auto;
    max-width: 800px;
    width: 90%;
}

figcaption {
    margin: 0 auto;
    max-width: 800px;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
    text-align: center;
    width: 90%;
    /* point this out to class and toggle it to show effect */
    word-break: break-word;
}

/* End global styling */
```

8. Your site **must** be ***completely responsive***. This **means** that you should be **using** `media queries` where ***necessary***, and/or `fluid design layout` so that ALL your `site pages` **fit within** the `viewports` of any `device` by ***adapting*** to those `viewports` WITHOUT OMMITTING ANY DATA in the **process**.

 
