const navbar = document.querySelector(".main-nav")
const ham = document.querySelector(".hamburger")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links

// METHOD 1
const menuLinks = document.querySelectorAll(".menu-link")
menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener("click", toggleHamburger)
  }
)
