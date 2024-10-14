document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        navLinks.forEach((nav) => nav.classList.remove("active"));
        (event.target as HTMLElement).classList.add("active");
      });
    });
  });