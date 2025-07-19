// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Highlight active project in sidebar on scroll
const sections = document.querySelectorAll(".project");
const navItems = document.querySelectorAll(".project-nav li");

function highlightCurrentProject() {
  let currentId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const midpoint = window.innerHeight / 2;

    if (rect.top <= midpoint && rect.bottom >= midpoint) {
      currentId = section.id;
    }
  });

  navItems.forEach((li) => {
    const targetId = li.dataset.target;
    li.classList.toggle("active", targetId === currentId);
  });
}

window.addEventListener("scroll", highlightCurrentProject);

// Smooth scroll to project on sidebar item click
navItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = li.dataset.target;
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const yOffset = -80; // adjust for fixed navbar
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  });
});
