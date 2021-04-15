function navHighlight() {
	const links = document.querySelectorAll('.menu-link')
	for (var i = 0; i < links.length; i++) {
	    if (links[i].href === document.URL) {
	        links[i].classList.add('active')
	    }
		if (links[0].href === document.URL || document.URL === 'https://www.letsbsocial.nyc/') {
	        links[0].classList.add('active')
	    }
		if (links[4].href === document.URL || document.URL.includes('https://www.letsbsocial.nyc/submit.html')) {
	        links[4].classList.add('active')
	    }
	}
}

navHighlight()
