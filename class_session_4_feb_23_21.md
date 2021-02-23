Class Notes 2.23.21

First went over the Sectioning HTML slide deck.

Example of a full absolute path to a JavaScript file that resides inside a scripts folder at the root of the sectioning html slide deck:

```shell
/Users/mariacam/comd2451/web-design-slide-decks/sectioning-html/scripts/hamburger.js
```

Example of the same file path but the relative path to the hamburger.js file that is residing in the scripts folder:

```shell
scripts/hamburger.js
```

This is what I meant by sharing your Creative Commons images in a code snippet:

```html
<p style="font-size: 0.9rem;font-style: italic;"><img style="display: block;" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Yorkshire_pigs_at_animal_sanctuary.jpg" alt="File:Yorkshire pigs at animal sanctuary.jpg"><a href="https://commons.wikimedia.org/w/index.php?curid=11762434">"File:Yorkshire pigs at animal sanctuary.jpg"</a><span> by <a href="https://www.flickr.com/photos/28267496@N00">Mark Peters from Baltimore, USA</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY 2.0</a><a href="https://creativecommons.org/licenses/by/2.0?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=153f4ff9-c5cc-4897-8328-b378105fa28e" /><img style="height: inherit;margin-right: 3px;display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /></a></p>
```

For Google Fonts, we can go to the Google Fonts web site, click on the name of the font family we want to choose, which will take us to the page containing its available styles. There are two ways that we can add fonts to our projects. One is the link element approach, which is similar to pointing to our external stylesheet. The link element points to the font family you selected inside the href attribute, just as with the external stylesheet. It looks something like this:

```html
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;1,100&display=swap" rel="stylesheet">
```

The other way, is using the @import rule and adding this to the top of your external stylesheet:

```css
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;1,100&display=swap');
```

Then we want to add the fofllowing CSS property declaration to a CSS Selector:

```css
body {
    font-family: 'Work Sans', sans-serif;
}
```

Above, 'Work Sans' is the family name. `sans serif` is the generic family. 

You can test how accessibility friendly your site is with Lighthouse. it is a Chrome extension which you can find in the Chrome Web Store. It will become your best friend.

This is an example of placing the generated Creative Commons HTML inside the figure element and also adding the figcaption element which wraps around the attribution:

```html
<figure>
				<img src="https://live.staticflickr.com/2535/4188650592_d245f48434_b.jpg"
					 alt="Nature bird">
				<figcaption>
					<p class="caption"><a
						   href="https://www.flickr.com/photos/29468339@N02/4188650592">"Nature
							bird"</a><span> by <a
							   href="https://www.flickr.com/photos/29468339@N02">@Doug88888</a></span>
						is licensed under <a
						   href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html"
						   style="margin-right: 5px;">CC BY-NC-SA 2.0</a>
					</p>
					<p class="caption">
						<a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=ccsearch&atype=html"
						   target="_blank"
						   rel="noopener noreferrer"
						   style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;"><img
								 style="height: inherit;margin-right: 3px;display: inline-block;"
								 src="https://search.creativecommons.org/static/img/cc_icon.svg?image_id=8e2b1e58-8163-4469-b8c7-b02b9245fd13" /><img
								 style="height: inherit;margin-right: 3px;display: inline-block;"
								 src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img
								 style="height: inherit;margin-right: 3px;display: inline-block;"
								 src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /><img
								 style="height: inherit;margin-right: 3px;display: inline-block;"
								 src="https://search.creativecommons.org/static/img/cc-sa_icon.svg" /></a>
					</p>
				</figcaption>
			</figure>
```

In order to change the color of the page background, we can use either the `background` property or the `background-color` property to change the page's background color. Something like this:

```css
body {
    background: #591246;
}
```
Or we can use the background-color property to change the background color:

```css
body {
    background-color: #591246;
}
```

I shared the CSS Fonts slide deck:  [CSS Fonts](github.com/interglobalmedia/css-fonts/blob/master/css-fonts.md)

Very important tools:

1. The Lighthouse Chrome Extension

2. How Big Is My Browser (site that resizes your browser window and provides the dimensions). Very good for responsive design, especially when you want to figure out/establish break points. Also great for sizing the browser window when you want to take screenshots that consist of the same dimensions. Link to How Big is My Browser:  [How Big is My Browser](http://howbigismybrowser.com/).

Link to the HTML5 resume on Codepen that we will try and emulate: [Responsive HTML5 Resume](codepen.io/jaredpearce/pen/iBdxb)

As promised, I will release the HTML files I created for the portfolio site onto the repositories. Trty and do the steps so you understand what is going on, and not simply copying and pasting. So when I release them, I will come back here and indicate what is where. I will also upload everything to my site so you can see what it looks like live.

Remember, that if you go into the Elements tab inside the Chrome Developer Tools that you can view the HTML of the page as well. In addition, if you go into the Chrome Developer Tools Sources tab, you will find my styles folder and the main.css file inside it.

The best thing, however, will be to view the code inside the HTML files themselves. You can always download the rrepository and view it locally using the Brackets Live Preview extension. That way, you can also play with the code. Let me know if you are having issues downloading.

If you click on the green Code button available on a repository, you can select `Download Zip` and the whole contents of the repository will download for you. Only pay attention to the `index.html` and ***other*** `html files` as well as the `styles folder` (if there is a `styles folder`)  that contains the `main.css` file. The `custom.css` file in the `root` of the `project folder` is ***related*** to the  `slide deck styling`. Ignore that. Also ignore the `package.json` file, the` .gitignore` file, and the `reveal.json` file. If you did not get a chance to grab the `pre_session_4_notes_feb_23_21.md file from Discord, the file is actually located in the sectioning-html repository, where all the portfolio site related files are (among other places as well, including the Types of Intellectual Property slide deck). This file is also located in the Sectioning HTML slide deck repository.

For those of you that asked me (Nastassia, good question) to share where I discuss CSS Grid, it is in the [Types of Intellectual Property](https://github.com/interglobalmedia/types-of-intellectual-property/blob/master/types-of-intellectual-property.md) slide deck, and check it out there. You can download that repository if you like as well. You can download all the slide deck repositories. That way, you can view the slide deck markdown file using the Brackets Markdown Preview extension!

If there is anyone who is interested in learning how to download Node.js and NPM (which is what is necessary to run the slide decks locally like I do for class), I would be happy to show you, but not during class. This is also beyond the scope of the class, so if it does not work out,  it does not work out. It would have to be during office hour. I would also have to show you how to start running it in Terminal (Command Line) on your Mac. That way you would see the slide deck like I do and like I present it in class!

Next, I had mentioned that I had created a [Creating a Basic Responsive Navigation](https://github.com/interglobalmedia/basic-responsive-navigation/blob/master/basic-responsive-navigation.md) and [Creating a Basic Sticky Footer](https://github.com/interglobalmedia/basic-sticky-footer/blob/master/basic-sticky-footer.md) slide deck which go through steps for creating the responsive navigation for the site, and the sticky footer. 

I would like you guys to add the navigation (only desktop no media queries yet, as we have not covered media queries in class) without the hamburger (but you can include the hamburger related markup including classes and ids that might appear in the HTML markup) as well as any CSS that does not include media queries (anything outside of the @media block of CSS code. Inside the @media block is media query related).

The same goes for any CSS media queries related to columns created by the CSS Grid. if you are not sure about something, just let me know.

For the Project 1:

1. Navigation should be added.

2. Footer should be added.

3. Portfolio page should be added.

4. Landing Page should be added.

The ***following*** is a `link` to a `bunch` of ***really cool*** `landing page ideas` and `takeaways`: [34 Brilliant Landing Page Examples
With 71 Takeaways](https://klientboost.com/cro/landing-page-examples/). 

***Another link*** to some other `great examples` of` landing pages` and ***how*** to get `potential clients` and `employers` to ***visit*** your `site`:  [12 Standout Examples of Web Design Portfolios](https://elementor.com/blog/web-design-portfolio-examples/) - this was also included in the readings on the course repository.

Shay Howe's [Learn To Code HTML and CSS](https://learn.shayhowe.com/) might also provide some inspiration.

5. Semantic HTML to the Landing page but especially the Portfolio page should be added. You can be guided by what I have in my HTML markup.

Week 4 Assignment 4 due next Tuesday, March 2, 2021:

1. Place CSS stylesheet(s)into a separate styles folder.

2. Place images into separate images folder (if applicable, but I did mention that you do not have to use any Unsplash images in your portfolio site). Make sure that you change the path of your external stylesheet to reflect the fact that you have placed it inside a styles folder. The same with your images inside the images folder (if applicable).

3. Both the styles and images folders should be at the root of your parent project folder.

4. Upload changes to Namecheap.com.

Assignment 4 will be graded separately from Assignment 3, which is the Project 1 two page website (Landing and Portfolio pages). But since it only involves moving files into folders and then uploading them to your site, you might as well do both assignments at the same time!

Week Four Homework Questions 4 (part 2):

There are also questions to be answered for the week 4 part 2 homework that will be due Next Tuesday, March 2, before class.
There aren't too many of those left. After that, it will all be about the project! I think there will be 3 or four more sets of questions to answer. I will also send out an announcement on Blackboard to recap what is due next week. Thanks!

Required Reading for this week under Week 4 Required Reading on the course repository:

+ [Images and their backgrounds in HTML5, Relative vs Absolute Paths: Maria D. Campbell *](https://github.com/interglobalmedia/image-backgrounds-rel-abs-paths/blob/master/image-backgrounds-rel-abs-paths.md)

+ [Sectioning HTML Documents, Adding external style sheets: Maria D. Campbell *](https://github.com/interglobalmedia/sectioning-html/blob/master/sectioning-html.md)

+ [Creating a Basic Responsive Navigation: Maria D. Campbell *](https://github.com/interglobalmedia/basic-responsive-navigation/blob/master/basic-responsive-navigation.md)

+ [Creating a Basic Sticky Footer: Maria D. Campbell *](https://github.com/interglobalmedia/basic-sticky-footer/blob/master/basic-sticky-footer.md)

+ [CSS Fonts: Maria D. Campbell *](https://github.com/interglobalmedia/css-fonts/blob/master/css-fonts.md)

+ [Working with Typography: Shay Howe *](https://learn.shayhowe.com/html-css/working-with-typography/)




















