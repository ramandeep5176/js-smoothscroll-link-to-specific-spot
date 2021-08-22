// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navtoggle = document.querySelector(".nav-toggle");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navtoggle.addEventListener("click", function () {
  // linkscontainer.classList.toggle('show-links')
  const containerheight = linkscontainer.getBoundingClientRect().height;
  const linksheight = links.getBoundingClientRect().height;

  if (containerheight === 0) {
    linkscontainer.style.height = `${linksheight}px`;
  } else {
    linkscontainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navheight * 2) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
const scrolllinks = document.querySelectorAll(".scroll-link");

scrolllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //   prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate height
    const navheight = navbar.getBoundingClientRect().height;
    const containerheight = linkscontainer.getBoundingClientRect().height;

    const fixednav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navheight;

    if (!fixednav) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerheight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linkscontainer.style.height = 0;
  });
});
