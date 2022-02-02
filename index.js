const burger = document.querySelector(".nav-burger");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-item");


function toggleMenu() {
  if (navList.classList.contains("nav-change")) {
    navList.classList.remove("nav-change");
    burger.classList.toggle("change");
  } else {
    navList.classList.add("nav-change");
    burger.classList.toggle("change");
  }
}

burger.addEventListener("click", toggleMenu);

navItem.forEach( 
  function(navItem) { 
    navItem.addEventListener("click", toggleMenu);
  }
)