function navHighlight() {
	const links = document.querySelectorAll('li .menu-link')
	for (var i = 0; i < links.length; i++) {
	    if (links[i].href === document.URL) {
	        links[i].classList.add('active')
	    }
	}
}

navHighlight()
