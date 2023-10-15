let navToggler = document.querySelector(".mobile-nav-toggle");
let nav = document.querySelector(".nav");

navToggler.addEventListener("click", () => {
  const visible = nav.getAttribute("area-open");

  if (visible === "true") {
    nav.setAttribute("area-open", "false");
    navToggler.setAttribute("area-expanded", "false");
  } else if (visible == "false") {
    nav.setAttribute("area-open", "true");
    navToggler.setAttribute("area-expanded", "true");
  }
});
