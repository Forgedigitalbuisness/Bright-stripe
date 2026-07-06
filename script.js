function toggleMenu() {
  const menu = document.getElementById("nav-links");
  const toggle = document.getElementById("menu-toggle");

  menu.classList.toggle("show");
  toggle.classList.toggle("active");
}
