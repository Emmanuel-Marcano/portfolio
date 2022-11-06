const menuButton = document.querySelector(".mobile-menu")
const navbar = document.querySelector("nav")
const closeMenu = document.querySelector(".close-icon")
const openMenu = document.querySelector(".menu-icon")

menuButton.addEventListener("click", () => {
  if (navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    menuButton.classList.remove("mobile");

  } else {
    navbar.classList.add("open")
    menuButton.classList.add("mobile")
    
  }
})
  

  
  // When the user clicks on the button, scroll to the top of the document
